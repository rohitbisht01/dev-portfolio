import type { Metadata } from "next";
import { Recursive } from "next/font/google";
import "./globals.css";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit Singh Bisht",
  description:
    "A Full stack developer portfolio with expertise in trending technologies",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='lightgray'/><text y='55%' x='50%' dominant-baseline='middle' text-anchor='middle' font-size='50' font-family='Arial' fill='black'>R</text></svg>",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${recursive.className} relative min-h-full`}>
        <div className="fixed inset-0 z-[-1] bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <main className="relative z-10 container mx-auto max-w-screen-lg sm:max-w-[700px] lg:max-w-xl xl:max-w-3xl py-6 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
