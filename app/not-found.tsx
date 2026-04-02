import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 gap-4 text-center px-4">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-fd-muted-foreground">This page could not be found.</p>
      <Link
        href="/"
        className="text-sm underline underline-offset-4 text-fd-muted-foreground hover:text-fd-foreground transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}
