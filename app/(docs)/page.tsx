import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { StructuredData } from '@/components/structured-data';
import {
  absoluteUrl,
  createBreadcrumbStructuredData,
  createPageMetadata,
  createPageStructuredData,
  getPageDescription,
  getPageLastModified,
} from '@/lib/seo';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';

export default async function Page() {
  const page = source.getPage([]);
  if (!page) notFound();

  const MDX = page.data.body;
  const description = getPageDescription(page.data.description);
  const lastModified = await getPageLastModified(page.absolutePath);

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <StructuredData
        data={[
          createPageStructuredData({
            type: 'CollectionPage',
            title: "Liam Beeton's Public Notes",
            description,
            path: page.url,
            lastModified,
            imagePath: '/elephant.jpg',
          }),
          createBreadcrumbStructuredData([
            {
              name: 'Home',
              url: absoluteUrl('/'),
            },
          ]),
        ]}
      />
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{description}</DocsDescription>
      <DocsBody>
        <MDX components={getMDXComponents()} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateMetadata() {
  const page = source.getPage([]);
  if (!page) notFound();
  const lastModified = await getPageLastModified(page.absolutePath);
  const description =
    'Personal notes on software development, AI, cybersecurity, trail running, mountain biking, photography, and life in South Africa.';

  return createPageMetadata({
    title: {
      absolute: "Liam Beeton's Public Notes | Software, AI, and Outdoor Life",
    },
    description,
    path: page.url,
    openGraphType: 'website',
    modifiedTime: lastModified,
    keywords: [
      'Liam Beeton',
      'software development notes',
      'AI notes',
      'cybersecurity notes',
      'trail running',
      'photography',
    ],
  });
}
