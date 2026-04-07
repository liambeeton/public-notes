import { source } from '@/lib/source';
import { DocsPage, DocsBody, DocsTitle, DocsDescription } from 'fumadocs-ui/page';
import { getBreadcrumbItems } from 'fumadocs-core/breadcrumb';
import { StructuredData } from '@/components/structured-data';
import {
  absoluteUrl,
  createBreadcrumbStructuredData,
  createPageMetadata,
  createPageStructuredData,
  createPersonStructuredData,
  getPageDescription,
  getPageLastModified,
  toPlainText,
} from '@/lib/seo';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/components/mdx';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const description = getPageDescription(page.data.description);
  const lastModified = await getPageLastModified(page.absolutePath);
  const breadcrumbs = getBreadcrumbItems(page.url, source.getPageTree(), {
    includePage: true,
  });
  const breadcrumbLinks = [
    {
      name: 'Home',
      url: absoluteUrl('/'),
    },
    ...breadcrumbs
      .map((item) => {
        const name = toPlainText(item.name);

        if (!name || !item.url) {
          return undefined;
        }

        return {
          name,
          url: absoluteUrl(item.url),
        };
      })
      .filter((item): item is { name: string; url: string } => Boolean(item)),
  ];
  const isAboutPage = page.url === '/about';

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <StructuredData
        data={[
          createPageStructuredData({
            type: isAboutPage ? 'AboutPage' : 'WebPage',
            title: page.data.title,
            description,
            path: page.url,
            lastModified,
            imagePath: isAboutPage ? '/lion.jpg' : undefined,
          }),
          createBreadcrumbStructuredData(breadcrumbLinks),
          ...(isAboutPage ? [createPersonStructuredData()] : []),
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

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const page = source.getPage(slug);
  if (!page) notFound();
  const lastModified = await getPageLastModified(page.absolutePath);
  const isAboutPage = page.url === '/about';
  const description = getPageDescription(page.data.description);

  return createPageMetadata({
    title: page.data.title,
    description,
    path: page.url,
    openGraphType: isAboutPage ? 'profile' : 'article',
    modifiedTime: lastModified,
  });
}
