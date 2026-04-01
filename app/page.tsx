import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
      <h1 className="text-4xl font-bold">Liam's Public Notes</h1>
      <p className="text-fd-muted-foreground max-w-md text-lg">
        A collection of notes on web development, tooling, and more.
      </p>
      <Link
        href="/docs"
        className="bg-fd-primary text-fd-primary-foreground rounded-md px-6 py-2 font-medium hover:opacity-90"
      >
        Browse Notes
      </Link>
    </main>
  );
}
