import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { absoluteUrl, getPageLastModified } from '@/lib/seo';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = source.getPages();

  return Promise.all(
    pages.map(async (page) => ({
      url: absoluteUrl(page.url),
      lastModified: await getPageLastModified(page.absolutePath),
      changeFrequency: page.url === '/' ? 'weekly' : 'monthly',
      priority: page.url === '/' ? 1 : 0.7,
    })),
  );
}
