import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// "_" ile başlayan dosyalar şablondur, siteye eklenmez.
const isler = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/isler' }),
  schema: z.object({
    baslik: z.string(),
    marka: z.string().optional(), // boş bırakılırsa müşteri adı gösterilmez
    sektor: z.string().optional(),
    ozet: z.string(),
    yil: z.number(),
    hizmetler: z.array(z.string()).default([]),
    kapak: z.string().optional(),
    one_cikan: z.boolean().default(false),
    taslak: z.boolean().default(false),
  }),
});

const haberler = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/haberler' }),
  schema: z.object({
    baslik: z.string(),
    tarih: z.coerce.date(),
    ozet: z.string(),
    tur: z.enum(['Basın bülteni', 'Haber', 'Görüş']).default('Haber'),
    taslak: z.boolean().default(false),
  }),
});

export const collections = { isler, haberler };
