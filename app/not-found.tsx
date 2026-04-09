import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you were looking for could not be found.",
  robots: {
    index: false,
    follow: false,
  },
};

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
