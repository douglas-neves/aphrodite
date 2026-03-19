import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import type { Metadata } from "next";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://douglasneves.dev";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isPt = locale === "pt";

  return {
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        "pt-BR": `${BASE_URL}/pt`,
        en: `${BASE_URL}/en`,
      },
    },
    openGraph: {
      locale: isPt ? "pt_BR" : "en_US",
      alternateLocale: isPt ? "en_US" : "pt_BR",
      title: isPt
        ? "Douglas Neves | Engenheiro Frontend Sênior"
        : "Douglas Neves | Senior Frontend Engineer",
      description: isPt
        ? "Engenheiro Frontend Sênior com +14 anos de experiência em React, Next.js, Vue.js e TypeScript."
        : "Senior Frontend Engineer with 14+ years of experience in React, Next.js, Vue.js and TypeScript.",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
