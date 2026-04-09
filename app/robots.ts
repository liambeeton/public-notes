import type { MetadataRoute } from 'next';
import { absoluteUrl, shouldAllowIndexing } from '@/lib/seo';

export default function robots(): MetadataRoute.Robots {
  const allowIndexing = shouldAllowIndexing();

  return {
    rules: allowIndexing
      ? {
          userAgent: '*',
          allow: '/',
        }
      : {
          userAgent: '*',
          disallow: '/',
        },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
