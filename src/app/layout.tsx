import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  description: `I'm a tinkerer, a lifelong learner and a collector of hobbies.`,
  metadataBase: new URL('https://liambeeton.com'),
  keywords: [
    'Liam Beeton',
    'Public Notes',
    'Software Developer',
    'Programming',
    'Nextra',
    'Next.js',
    'React',
    'JavaScript',
    'MDX',
    'Markdown',
    'Static Site Generator',
    'Golang',
    'C#',
    '.Net',
    'Rust',
    'Kubernetes',
    'DevOps',
    'Cybersecurity',
    'Artificial Intelligence',
    'macOS',
    'iOS',
    'Android',
    'Linux',
    'Windows',
  ],
  generator: 'Next.js',
  applicationName: `Liam Beeton's Public Notes`,
  appleWebApp: {
    title: `Liam Beeton's Public Notes`,
  },
  title: {
    default: `Liam Beeton's Public Notes`,
    template: '%s | Liam Beeton',
  },
  openGraph: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    url: './',
    siteName: `Liam Beeton's Public Notes`,
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'msapplication-TileColor': '#fff',
  },
  twitter: {
    site: 'https://liambeeton.com',
  },
  alternates: {
    // https://github.com/vercel/next.js/discussions/50189#discussioncomment-10826632
    canonical: './',
  },
}

// const banner = (
//   <Banner storageKey="site-wide-banner">Nextra 4.0 is released 🎉</Banner>
// )
const navbar = (
  <Navbar
    logo={
      <div>
        <b>Liam Beeton&apos;s</b>{' '}
        <span style={{ opacity: '60%' }}>Public Notes</span>
      </div>
    }
    projectLink="https://github.com/liambeeton"
    chatLink="https://bsky.app/profile/liambeeton.com"
    chatIcon={
      <svg width="24" height="24" viewBox="0 0 600 530">
        <path
          d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z"
          fill="currentColor"
        />
      </svg>
    }
  />
)
const footer = (
  <Footer className="flex-col items-center md:items-start">
    <p>
      &quot;Amy, technology isn&apos;t intrinsically good or evil. It&apos;s how
      it&apos;s used. Like the Death Ray.&quot; - Professor Farnsworth
    </p>
    <p className="mt-6 text-xs">© {new Date().getFullYear()} Liam Beeton.</p>
  </Footer>
)

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let analyticsId: string
  if (process.env.NEXT_PUBLIC_ANALYTICS_ID) {
    analyticsId = process.env.NEXT_PUBLIC_ANALYTICS_ID
  } else {
    throw new Error('ANALYTICS_ID environment variable is not set')
  }

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          // banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/liambeeton/public-notes/tree/main/"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
      <GoogleAnalytics gaId={analyticsId} />
    </html>
  )
}
