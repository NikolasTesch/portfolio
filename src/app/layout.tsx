import type { Metadata } from "next";
import { Manrope, Cabin, Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { I18nProvider } from "@/i18n/I18nProvider";
import { site } from "@/content/site";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const cabin = Cabin({ subsets: ["latin"], variable: "--font-cabin" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const title = `${site.name} — Desenvolvedor Fullstack`;
const description =
  "Desenvolvedor fullstack que cria aplicações web modernas com React e Next.js — do design ao deploy. Projetos reais: DataBolsa, NKS Art e Fase Sport.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "Nikolas Tesch",
    "desenvolvedor fullstack",
    "fullstack developer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "portfólio dev",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: {
    canonical: "/",
    languages: { "pt-BR": "/", en: "/" },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    alternateLocale: "en_US",
    url: site.url,
    siteName: site.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" suppressHydrationWarning>
      <body
        className={`${manrope.variable} ${cabin.variable} ${inter.variable} ${instrumentSerif.variable} font-inter`}
      >
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
