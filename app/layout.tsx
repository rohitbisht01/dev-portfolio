import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Singh Bisht | Portfolio",
  description:
    "A Full stack developer portfolio with experties in trending technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <main className="container mx-auto max-w-screen-lg sm:max-w-[700px] lg:max-w-xl xl:max-w-3xl py-6 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
