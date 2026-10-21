import { getCollection } from 'astro:content';

export async function isler() {
  const tum = await getCollection('isler', ({ data }) => !data.taslak);
  return tum.sort((a, b) => b.data.yil - a.data.yil);
}

export async function haberler() {
  const tum = await getCollection('haberler', ({ data }) => !data.taslak);
  return tum.sort((a, b) => b.data.tarih.valueOf() - a.data.tarih.valueOf());
}

export async function aktifMenu<T extends { koleksiyon?: 'isler' | 'haberler' }>(menu: T[]) {
  const sayi = { isler: (await isler()).length, haberler: (await haberler()).length };
  return menu.filter((m) => !m.koleksiyon || sayi[m.koleksiyon] > 0);
}

export const tarihYaz = (d: Date) =>
  new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
