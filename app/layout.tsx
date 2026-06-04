import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Flowbackdesk — PostHog wizard demo",
  description:
    "A mock SaaS funnel for testing PostHog autocapture and custom events.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <header className="border-b border-neutral-200">
          <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-lg font-semibold tracking-tight">
              Flowbackdesk
            </Link>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
              <Link
                href="/signup"
                className="rounded-md bg-neutral-900 px-3 py-1.5 text-white hover:bg-neutral-700"
              >
                Sign up
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto w-full max-w-4xl flex-1 px-6 py-16">
          {children}
        </main>
        <footer className="border-t border-neutral-200 px-6 py-6 text-center text-xs text-neutral-400">
          Flowbackdesk is a fake product built to test PostHog.
        </footer>
      </body>
    </html>
  );
}
