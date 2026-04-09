import type { MetadataRoute } from 'next';
import { absoluteUrl, siteConfig } from '@/lib/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: '/',
    scope: '/',
    display: 'standalone',
    background_color: '#f6f0e5',
    theme_color: '#102a43',
    icons: [
      {
        src: absoluteUrl('/icon.svg'),
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
