import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Cordeiro — Engenheiro de Software Backend",
  description:
    "Engenheiro de Software Backend com 2+ anos de experiência construindo plataformas SaaS escaláveis, microsserviços e sistemas de automação. Especializado em Node.js, NestJS, TypeScript e AWS.",
  keywords: [
    "Victor Cordeiro",
    "Software Engineer",
    "Backend Developer",
    "Node.js",
    "TypeScript",
    "NestJS",
    "AWS",
    "Recife",
  ],
  authors: [{ name: "Victor Cordeiro" }],
  creator: "Victor Cordeiro",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    title: "Victor Cordeiro — Engenheiro de Software Backend",
    description:
      "Construindo plataformas SaaS escaláveis, microsserviços e sistemas de automação com Node.js, TypeScript e AWS.",
    siteName: "Victor Cordeiro",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Cordeiro — Engenheiro de Software Backend",
    description:
      "Construindo plataformas SaaS escaláveis, microsserviços e sistemas de automação com Node.js, TypeScript e AWS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Pular para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
