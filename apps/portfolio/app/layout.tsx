import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://douglasneves.dev";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Douglas Neves | Senior Frontend Engineer",
    template: "%s | Douglas Neves",
  },
  description:
    "Senior Frontend Engineer com +14 anos de experiência em React, Next.js, Vue.js, TypeScript e React Native. Especialista em Design Systems, Microfrontends e arquitetura frontend de alta performance.",
  keywords: [
    "Frontend Engineer", "Senior Frontend Developer", "React", "Next.js",
    "Vue.js", "Nuxt.js", "TypeScript", "React Native", "Design System",
    "Microfrontends", "Web Components", "Storybook", "Node.js", "AWS",
    "Douglas Neves", "Desenvolvedor Frontend Sênior", "São Paulo",
  ],
  authors: [{ name: "Douglas Neves", url: "https://www.linkedin.com/in/nevesdouglas" }],
  creator: "Douglas Neves",
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Douglas Neves — Senior Frontend Engineer",
    title: "Douglas Neves | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer com +14 anos de experiência em React, Next.js, Vue.js e TypeScript. Especialista em Design Systems e arquitetura frontend.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Douglas Neves — Senior Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Douglas Neves | Senior Frontend Engineer",
    description:
      "Senior Frontend Engineer com +14 anos de experiência em React, Next.js, Vue.js e TypeScript.",
    images: ["/og-image.png"],
    creator: "@douglasneves",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
