import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import Image from 'next/image';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export const metadata = {
  title: 'About',
  description: "Learn about Liam Beeton — software developer, trail runner, photographer, and more.",
};

export default function AboutPage() {
  const youngestAge = new Date().getFullYear() - 2021;
  const eldestAge = new Date().getFullYear() - 2019;

  return (
    <DocsLayout tree={source.pageTree} {...baseOptions}>
      <main className="container max-w-2xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">About</h1>
        <Image
          src="/lion.jpg"
          alt="Hiking Lion's Head"
          width={800}
          height={450}
          className="rounded-lg mb-8 w-full object-cover"
        />
        <div className="prose prose-fd">
          <p>
            I&apos;m Liam Beeton. I&apos;m a{' '}
            <a href="https://www.linkedin.com/in/liambeeton">software developer</a> and my partner
            and I have two boys; the youngest is {youngestAge} and the eldest is {eldestAge}. So
            that keeps me busy for the majority of my waking hours.
          </p>
          <p>
            I&apos;m also a tinkerer, a lifelong learner and a collector of hobbies. So, on this
            blog, I invite you to share in my fascination with any or all of the following:
          </p>
          <ul>
            <li>Trail running and mountain biking</li>
            <li>Cybersecurity — open source intelligence (OSINT) and red teaming</li>
            <li>Artificial Intelligence — mainly high-performance Retrieval-Augmented Generation (RAG) systems</li>
            <li>Making music — electronic music and music production</li>
            <li>Photography — digital and film</li>
            <li>Building LEGO Technic — mostly supercars</li>
            <li>Sojourns around South Africa</li>
            <li>Adventures in parenting</li>
            <li>Bullet journals, second brain and intentional living</li>
            <li>
              And yes, programming and software development — I consider myself a pretty versatile
              developer (frontend, backend, testing and everything in between), so you should
              hopefully see that reflected in what I share here!
            </li>
          </ul>
        </div>
      </main>
    </DocsLayout>
  );
}
