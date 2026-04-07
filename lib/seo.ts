import { stat } from 'node:fs/promises';
import type { Metadata } from 'next';

type SeoPageType = 'website' | 'article' | 'profile';
type JsonLd = Record<string, unknown>;

type PageMetadataOptions = {
  title: NonNullable<Metadata['title']>;
  description: string;
  path: string;
  openGraphType?: SeoPageType;
  modifiedTime?: Date;
  keywords?: string[];
};

type PageSchemaOptions = {
  type: 'AboutPage' | 'CollectionPage' | 'WebPage';
  title: string;
  description: string;
  path: string;
  lastModified?: Date;
  imagePath?: string;
};

type BreadcrumbLink = {
  name: string;
  url: string;
};

export const siteConfig = {
  name: "Liam's Public Notes",
  title: "Liam Beeton's Public Notes",
  description:
    'Personal notes on software development, AI, cybersecurity, trail running, mountain biking, photography, and life in South Africa.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.liambeeton.com',
  locale: 'en_ZA',
  language: 'en',
  author: {
    name: 'Liam Beeton',
    firstName: 'Liam',
    lastName: 'Beeton',
    jobTitle: 'Software Developer',
  },
  sameAs: [
    'https://www.linkedin.com/in/liambeeton',
    'https://www.strava.com/athletes/17232231',
    'https://www.flickr.com/photos/liambeeton',
  ],
  keywords: [
    'software development',
    'artificial intelligence',
    'cybersecurity',
    'Go',
    'Next.js',
    'trail running',
    'mountain biking',
    'photography',
    'South Africa',
  ],
} as const;

const websiteId = `${siteConfig.url}#website`;
const personId = `${absoluteUrl('/about')}#person`;

export function absoluteUrl(path = '/') {
  return new URL(path, siteConfig.url).toString();
}

export function shouldAllowIndexing() {
  if (process.env.VERCEL_ENV) {
    return process.env.VERCEL_ENV === 'production';
  }

  return process.env.NODE_ENV === 'production';
}

export function createPageMetadata({
  title,
  description,
  path,
  openGraphType = 'article',
  modifiedTime,
  keywords,
}: PageMetadataOptions): Metadata {
  const resolvedTitle =
    typeof title === 'string'
      ? title
      : 'absolute' in title && typeof title.absolute === 'string'
        ? title.absolute
        : siteConfig.title;

  const openGraph =
    openGraphType === 'profile'
      ? {
          type: 'profile' as const,
          firstName: siteConfig.author.firstName,
          lastName: siteConfig.author.lastName,
          title: resolvedTitle,
          description,
          url: path,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
        }
      : openGraphType === 'article'
        ? {
            type: 'article' as const,
            title: resolvedTitle,
            description,
            url: path,
            siteName: siteConfig.name,
            locale: siteConfig.locale,
            ...(modifiedTime ? { modifiedTime: modifiedTime.toISOString() } : {}),
            authors: [siteConfig.author.name, absoluteUrl('/about')],
          }
      : {
          type: 'website' as const,
          title: resolvedTitle,
          description,
          url: path,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
        };

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: resolvedTitle,
      description,
    },
  };
}

export async function getPageLastModified(filePath?: string) {
  if (!filePath) {
    return undefined;
  }

  try {
    const file = await stat(filePath);
    return file.mtime;
  } catch {
    return undefined;
  }
}

export function createWebsiteStructuredData(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': websiteId,
    name: siteConfig.title,
    alternateName: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.language,
    publisher: {
      '@id': personId,
    },
  };
}

export function createPageStructuredData({
  type,
  title,
  description,
  path,
  lastModified,
  imagePath,
}: PageSchemaOptions): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name: title,
    description,
    inLanguage: siteConfig.language,
    isPartOf: {
      '@id': websiteId,
    },
    about: {
      '@id': personId,
    },
    publisher: {
      '@id': personId,
    },
    ...(imagePath
      ? {
          primaryImageOfPage: {
            '@type': 'ImageObject',
            url: absoluteUrl(imagePath),
          },
        }
      : {}),
    ...(lastModified ? { dateModified: lastModified.toISOString() } : {}),
  };
}

export function createPersonStructuredData(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: siteConfig.author.name,
    givenName: siteConfig.author.firstName,
    familyName: siteConfig.author.lastName,
    jobTitle: siteConfig.author.jobTitle,
    url: absoluteUrl('/about'),
    image: absoluteUrl('/lion.jpg'),
    sameAs: siteConfig.sameAs,
    knowsAbout: [
      'Software development',
      'Artificial intelligence',
      'Cybersecurity',
      'Trail running',
      'Mountain biking',
      'Photography',
    ],
  };
}

export function createBreadcrumbStructuredData(items: BreadcrumbLink[]): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getPageDescription(description?: string) {
  return description ?? siteConfig.description;
}

export function toPlainText(value: unknown) {
  if (typeof value === 'string') {
    return value;
  }

  if (typeof value === 'number') {
    return String(value);
  }

  return undefined;
}
