const { app } = require('@azure/functions');
const { EmailClient } = require('@azure/communication-email');

// Gerekli uygulama ayarları (Static Web App > Environment variables):
//   ACS_CONNECTION_STRING  Azure Communication Services bağlantı dizesi
//   MAIL_FROM              Doğrulanmış gönderici, ör. DoNotReply@sobraz.com
//   MAIL_TO                Formların gideceği adres, ör. info@sobraz.com

const TESEKKUR = '/iletisim/tesekkurler/';
const HATA = '/iletisim/hata/';
const yonlendir = (yer) => ({ status: 303, headers: { Location: yer } });

const temizle = (v, max) => String(v ?? '').replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').trim().slice(0, max);
const epostaGecerli = (v) => /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]{2,}$/.test(v);
const kacis = (s) => s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

app.http('iletisim', {
  methods: ['POST'],
  authLevel: 'anonymous',
  route: 'iletisim',
  handler: async (request, context) => {
    let form;
    try {
      const govde = await request.text();
      if (govde.length > 20000) return yonlendir(HATA);
      form = new URLSearchParams(govde);
    } catch {
      return yonlendir(HATA);
    }

    // Bot tuzağı: gizli alan doluysa sessizce başarılı say.
    if (form.get('web')) return yonlendir(TESEKKUR);

    const v = {
      ad: temizle(form.get('ad'), 100),
      sirket: temizle(form.get('sirket'), 120),
      eposta: temizle(form.get('eposta'), 160),
      telefon: temizle(form.get('telefon'), 30),
      konu: temizle(form.get('konu'), 80),
      mesaj: temizle(form.get('mesaj'), 4000),
      kvkk: form.get('kvkk') === 'evet',
    };

    if (!v.ad || !v.mesaj || !epostaGecerli(v.eposta) || !v.kvkk) return yonlendir(HATA);

    const { ACS_CONNECTION_STRING, MAIL_FROM, MAIL_TO } = process.env;
    if (!ACS_CONNECTION_STRING || !MAIL_FROM || !MAIL_TO) {
      context.error('E-posta ayarları eksik.');
      return yonlendir(HATA);
    }

    const satirlar = [
      ['Ad soyad', v.ad], ['Şirket', v.sirket], ['E-posta', v.eposta],
      ['Telefon', v.telefon], ['Konu', v.konu],
    ].filter(([, d]) => d);

    try {
      const istemci = new EmailClient(ACS_CONNECTION_STRING);
      const islem = await istemci.beginSend({
        senderAddress: MAIL_FROM,
        recipients: { to: [{ address: MAIL_TO }] },
        replyTo: [{ address: v.eposta, displayName: v.ad }],
        content: {
          subject: `Web sitesi formu: ${v.konu || 'Yeni mesaj'} (${v.ad})`,
          plainText: satirlar.map(([k, d]) => `${k}: ${d}`).join('\n') + `\n\n${v.mesaj}\n\nKVKK onayı: Evet`,
          html: `<table>${satirlar.map(([k, d]) => `<tr><td><b>${k}</b></td><td>${kacis(d)}</td></tr>`).join('')}</table><p style="white-space:pre-wrap">${kacis(v.mesaj)}</p><p>KVKK onayı: Evet</p>`,
        },
      });
      await islem.pollUntilDone();
      return yonlendir(TESEKKUR);
    } catch (e) {
      context.error('E-posta gönderilemedi', e);
      return yonlendir(HATA);
    }
  },
});
