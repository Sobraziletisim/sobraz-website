export const site = {
  ad: 'Sobraz',
  tamAd: 'Sobraz İletişim',
  unvan: 'Sobraz İletişim Hizmetleri Danışmanlık ve Ticaret Limited Şirketi',
  slogan: 'Dünya iyi hikayeler sayesinde dönüyor',
  kurulus: 2013,
  url: 'https://sobraz.com',
  telefon: '0216 532 12 51',
  telefonHref: 'tel:+902165321251',
  eposta: 'info@sobraz.com',
  adres: {
    satir1: 'Quick Tower, Workinton',
    satir2: 'İçerenköy Mah. Topçu İbrahim Sk. No: 8-10',
    ilce: 'Ataşehir',
    il: 'İstanbul',
  },
  haritaUrl: 'https://www.google.com/maps/search/?api=1&query=Quick+Tower+Workinton+%C4%B0%C3%A7erenk%C3%B6y+Ata%C5%9Fehir',
  sosyal: [
    { ad: 'Instagram', url: 'https://www.instagram.com/sobrazonline/' },
    { ad: 'LinkedIn', url: 'https://www.linkedin.com/company/sobraz/' },
  ] as { ad: string; url: string }[],
};

export const menu = [
  { ad: 'Hakkımızda', url: '/hakkimizda/' },
  { ad: 'Hizmetler', url: '/hizmetler/' },
  { ad: 'İşlerimiz', url: '/isler/', koleksiyon: 'isler' },
  { ad: 'Yaklaşımımız', url: '/yaklasim/' },
  { ad: 'Haberler', url: '/haberler/', koleksiyon: 'haberler' },
  { ad: 'İletişim', url: '/iletisim/' },
] as { ad: string; url: string; koleksiyon?: 'isler' | 'haberler' }[];

// Ödüller: { yil: 2025, ad: 'Ödülün adı', kategori: 'Kategori', proje: 'Proje adı' }
export const oduller: { yil: number; ad: string; kategori?: string; proje?: string }[] = [
  { yil: 2025, ad: 'SMARTIES Business Impact Index', kategori: 'Türkiye Top Creative Agencies' },
];

// Açık pozisyonlar: { baslik: 'PR Uzmanı', tur: 'Tam zamanlı', aciklama: '...' }
export const pozisyonlar: { baslik: string; tur: string; aciklama: string }[] = [];

export type Hizmet = {
  slug: string;
  ad: string;
  kisa: string;
  giris: string;
  neden: string;
  kapsam: { baslik: string; metin: string }[];
  sorular: string[];
};

export const hizmetler: Hizmet[] = [
  {
    slug: 'kreatif-icerik',
    ad: 'Kreatif içerik üretimi',
    kisa: 'Markanın sesini taşıyan, paylaşılmak için yazılmış hikayeler, kampanyalar ve içerikler.',
    giris:
      'İyi bir fikir, doğru anlatıldığında kendi yolunu bulur. Markanın ne söylediğini değil, insanların neyi anlatmak isteyeceğini düşünerek içerik üretiyoruz.',
    neden:
      'Bugün her marka içerik üretiyor; çok azı hatırlanıyor. Fark, içeriğin markanın gerçek karakterinden mi yoksa bir takvim zorunluluğundan mı doğduğunda ortaya çıkıyor.',
    kapsam: [
      { baslik: 'Kampanya fikirleri', metin: 'Markanın iş hedefine bağlı, gündem yaratabilecek büyük fikirler ve bu fikirlerin kanallara dağılımı.' },
      { baslik: 'Hikaye ve mesaj geliştirme', metin: 'Markanın anlatısını, ana mesajlarını ve farklı kitlelere göre tonunu birlikte netleştiriyoruz.' },
      { baslik: 'Editoryal içerik', metin: 'Basın için haber değeri taşıyan içerikler, röportaj kurguları, köşe yazıları ve uzman görüşleri.' },
      { baslik: 'Dijital ve sosyal içerik', metin: 'Kanalın diline uygun, paylaşılma potansiyeli yüksek içerik serileri ve kampanya uzantıları.' },
      { baslik: 'Bütünleşik kampanyalar', metin: 'Hikayeyi tek bir kanalda bırakmıyoruz; içerik, dijital, deneyim ve aktivasyon aynı anda, aynı sesle konuşuyor.' },
    ],
    sorular: [
      'Markamız çok içerik üretiyor ama ses getirmiyor, neden?',
      'Hangi hikayemiz basının ilgisini çeker?',
      'Lansmanımızı nasıl konuşulur hale getiririz?',
    ],
  },
  {
    slug: 'stratejik-planlama',
    ad: 'Stratejik planlama',
    kisa: 'İletişimi markanın iş hedeflerine bağlayan, ne söyleyeceğimizi ve nerede söyleyeceğimizi belirleyen yol haritası.',
    giris:
      'Her iletişim çalışması bir iş sorusuyla başlar. Önce markanın nereye gitmek istediğini anlıyor, sonra oraya hangi hikayeyle ve hangi kanallardan gideceğimizi planlıyoruz.',
    neden:
      'Plansız iletişim görünürlük üretir ama etki üretmez. Strateji, harcanan her emeğin aynı hedefe hizmet etmesini sağlar.',
    kapsam: [
      { baslik: 'Durum ve algı analizi', metin: 'Markanın bugün nasıl konuşulduğunu, rakiplerin nerede durduğunu ve kitlenin neyi önemsediğini inceliyoruz.' },
      { baslik: 'Konumlandırma ve mesaj mimarisi', metin: 'Markanın sahiplenebileceği alanı ve bu alanı taşıyan mesaj yapısını kuruyoruz.' },
      { baslik: 'Yıllık iletişim planı', metin: 'Dönemsel hedefler, ana hikayeler, kanal dağılımı ve takvim tek bir yol haritasında.' },
      { baslik: 'Paydaş ve medya haritalama', metin: 'Markanın konuşması gereken kişileri, kurumları ve medya mecralarını önceliklendiriyoruz.' },
      { baslik: 'Ölçümleme çerçevesi', metin: 'Başarının neye göre değerlendirileceğini işin başında, iş hedefleriyle birlikte tanımlıyoruz.' },
    ],
    sorular: [
      'İletişim yatırımımız iş sonuçlarına nasıl yansıyor?',
      'Rakiplerimizden ayrışan bir hikayemiz var mı?',
      'Önümüzdeki yıl hangi konulara odaklanmalıyız?',
    ],
  },
  {
    slug: 'medya-iliskileri',
    ad: 'Geleneksel ve dijital medya iletişimi',
    kisa: 'Gazetecilerden içerik üreticilerine, markanın hikayesini doğru kişilerle ve doğru zamanda buluşturan medya ilişkileri.',
    giris:
      'Medya ilişkileri bülten göndermekten ibaret değil. Hangi hikayenin kimin ilgisini çekeceğini bilmek, gazetecilerle ve içerik üreticileriyle güvene dayalı ilişkiler kurmak demek.',
    neden:
      'Kazanılmış medya, markanın kendi kanallarında söyleyemeyeceği şeyi söyler: başkasının ağzından, inandırıcı bir şekilde. Bunun için haber değeri taşıyan bir hikaye ve doğru ilişkiler gerekir.',
    kapsam: [
      { baslik: 'Medya stratejisi', metin: 'Markanın hangi gündemlerde, hangi mecralarda ve hangi isimlerle görünmesi gerektiğini planlıyoruz.' },
      { baslik: 'Basın ilişkileri', metin: 'Haber değeri taşıyan hikayeler, basın bültenleri, röportaj ve özel haber çalışmaları.' },
      { baslik: 'Dijital medya ve içerik üreticileri', metin: 'Dijital yayınlar, podcast\'ler ve içerik üreticileriyle markaya uygun iş birlikleri.' },
      { baslik: 'Basın etkinlikleri', metin: 'Lansmanlar, basın buluşmaları ve deneyim günleriyle hikayeyi yerinde anlatıyoruz.' },
      { baslik: 'Medya takibi ve raporlama', metin: 'Görünürlüğü yalnızca sayıyla değil, mesajın ne kadar doğru aktarıldığıyla da değerlendiriyoruz.' },
    ],
    sorular: [
      'Markamız neden gündemde yeterince yer almıyor?',
      'Lansmanımız için hangi gazetecilere ulaşmalıyız?',
      'Dijital mecralarda nasıl daha görünür olabiliriz?',
    ],
  },
  {
    slug: 'etkinlik-ve-deneyim',
    ad: 'Etkinlik ve deneyim yönetimi',
    kisa: 'Hikayeyi ekrandan çıkarıp insanların yaşayabileceği, hatırlayacağı ve paylaşacağı deneyimlere dönüştüren etkinlikler.',
    giris:
      'Markalar artık yalnızca izletmek değil; hissettirmek, deneyimletmek ve yaşatmak zorunda. Hikayeyi sahaya taşıyor, insanların içinde yer aldığı ortak anılara dönüştürüyoruz.',
    neden:
      'Yaşanan bir an, izlenen bir reklamdan çok daha uzun hatırlanır. İyi kurgulanmış bir deneyim, sahada bittiği anda yeniden içeriğe dönüşür ve hikayeyi büyütmeye devam eder.',
    kapsam: [
      { baslik: 'Deneyim fikri ve kurgu', metin: 'Markanın hikayesini fiziksel bir deneyime dönüştüren fikirler ve akışlar.' },
      { baslik: 'Lansman ve basın etkinlikleri', metin: 'Ürün lansmanlarından basın buluşmalarına, markanın sahnede olduğu anlar.' },
      { baslik: 'Aktivasyon ve saha uygulamaları', metin: 'Kitleyle doğrudan buluşulan, katılımı ve paylaşımı teşvik eden uygulamalar.' },
      { baslik: 'Proje yönetimi', metin: 'Bütçe, takvim, tedarikçiler ve ekipler tek bir planla, uçtan uca yönetiliyor.' },
      { baslik: 'Deneyimden içeriğe', metin: 'Sahada yaşananları sosyal medya ve basın için yeniden hikayeye dönüştürüyoruz.' },
    ],
    sorular: [
      'Lansmanımızı nasıl konuşulan bir ana dönüştürürüz?',
      'Etkinliğimiz bittikten sonra da nasıl konuşulmaya devam eder?',
      'Markamızı insanların yaşayabileceği bir deneyime nasıl çeviririz?',
    ],
  },
  {
    slug: 'kriz-yonetimi',
    ad: 'Kriz yönetimi',
    kisa: 'Zor anlarda hızlı, açık ve sakin iletişim. Hazırlıktan sahadaki yönetime kadar markanın yanında.',
    giris:
      'Kriz anında güven, söylenenlerden çok nasıl söylendiğiyle korunur. Hazırlığı önceden yapıyor, an geldiğinde markanın yanında soğukkanlı bir ekip olarak duruyoruz.',
    neden:
      'Krizler genellikle haber vermeden gelir. Hazırlıklı markalar ilk saatlerde doğru adımı atar; hazırlıksız olanlar ise kendi hikayelerinin kontrolünü kaybeder.',
    kapsam: [
      { baslik: 'Risk ve senaryo analizi', metin: 'Markayı etkileyebilecek olası krizleri önceden belirleyip öncelik sırasına koyuyoruz.' },
      { baslik: 'Kriz iletişim kılavuzu', metin: 'Rol dağılımı, onay akışları, ilk açıklama şablonları ve iletişim kanalları tek bir kılavuzda.' },
      { baslik: 'Sözcü hazırlığı', metin: 'Yöneticileri zor sorulara ve medya karşısındaki baskıya hazırlayan uygulamalı çalışmalar.' },
      { baslik: 'Anlık kriz desteği', metin: 'Kriz sırasında durum takibi, açıklamaların hazırlanması ve medya ilişkilerinin yönetimi.' },
      { baslik: 'Kriz sonrası itibar onarımı', metin: 'Güveni yeniden inşa eden, sözle değil davranışla desteklenen iletişim adımları.' },
    ],
    sorular: [
      'Bir kriz anında ilk bir saatte ne yapacağımızı biliyor muyuz?',
      'Sözcülerimiz zor sorulara hazır mı?',
      'Sosyal medyada büyüyen bir şikayete nasıl yanıt vermeliyiz?',
    ],
  },
  {
    slug: 'marka-elcisi-programlari',
    ad: 'Bütünleşik marka elçisi programları',
    kisa: 'Markayı gerçekten benimseyen insanlarla kurulan, uzun soluklu ve samimi iş birlikleri.',
    giris:
      'Bir markayı en inandırıcı anlatan, onu gerçekten seven insanlardır. Elçilik programlarını tek seferlik paylaşımlar üzerine değil, karşılıklı değer üreten ilişkiler üzerine kuruyoruz.',
    neden:
      'İnsanlar reklamdan çok birbirlerine güvenir. Doğru kişilerle kurulan uzun soluklu iş birlikleri, markaya kampanya bittiğinde de süren bir ses kazandırır.',
    kapsam: [
      { baslik: 'Elçi seçimi ve kültür uyumu', metin: 'Takipçi sayısından önce değer uyumuna bakarak markayla gerçekten örtüşen isimleri belirliyoruz.' },
      { baslik: 'Program tasarımı', metin: 'Elçilerin markayla nasıl ve ne sıklıkla buluşacağını tanımlayan uzun soluklu bir çerçeve.' },
      { baslik: 'İçerik ortaklıkları', metin: 'Elçinin kendi diliyle anlattığı, samimiyetini koruyan ortak içerikler.' },
      { baslik: 'Çalışan ve müşteri elçiliği', metin: 'Markanın en yakınındaki insanları, yani çalışanları ve sadık müşterileri hikayenin parçası yapıyoruz.' },
      { baslik: 'İlişki yönetimi ve raporlama', metin: 'Programın sağlığını, elçi memnuniyetini ve markaya katkısını düzenli olarak izliyoruz.' },
    ],
    sorular: [
      'Hangi isimler markamızı gerçekten temsil eder?',
      'Influencer iş birliklerimiz neden kalıcı etki bırakmıyor?',
      'Çalışanlarımızı markamızın sesi haline nasıl getiririz?',
    ],
  },
];

export const surec = [
  { ad: 'Dinlemek', metin: 'Markanın iş hedeflerini, kültürünü ve kitlesini anlamakla başlıyoruz. Brief\'in arkasındaki asıl soruyu bulmak için önce soru soruyoruz.' },
  { ad: 'Aynı masaya oturmak', metin: 'Markayla çalışan tüm ajansları ve ekipleri tek brief etrafında buluşturuyoruz. Herkes aynı hedefe, aynı hikayeye bakıyor.' },
  { ad: 'Hikayeyi kurmak', metin: 'Markanın ruhunu yansıtan ana hikayeyi, mesajları ve bu hikayenin hangi kanallarda nasıl yaşayacağını planlıyoruz.' },
  { ad: 'Hayata geçirmek', metin: 'İçerikten basın ilişkilerine, etkinliklerden elçilik programlarına kadar planı sahada uyguluyoruz.' },
  { ad: 'Ölçmek ve geliştirmek', metin: 'Sonuçları iş hedefleriyle karşılaştırıyor, öğrendiklerimizle bir sonraki adımı daha güçlü atıyoruz.' },
];

export const degerler = [
  { ad: 'İnsan gözüyle bakmak', metin: 'Kitleleri tüketici olarak değil, duyguları, değerleri ve hikayeleri olan insanlar olarak görüyoruz.' },
  { ad: 'Bağımsız kalmak', metin: 'Hiçbir ağın ya da holdingin parçası değiliz. Kararlarımızı yalnızca markalarımızın ihtiyacına göre veriyoruz.' },
  { ad: 'Kültür uyumu', metin: 'Değerlerini paylaştığımız ve ortak bir değer yaratabileceğimiz markalarla çalışmayı seçiyoruz.' },
  { ad: 'İş birliği', metin: 'En iyi sonuçların, markanın tüm paydaşları aynı masada buluştuğunda ortaya çıktığına inanıyoruz.' },
];
