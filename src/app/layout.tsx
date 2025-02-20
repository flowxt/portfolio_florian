import type { Metadata } from "next";
import { Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ["400"], });

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio-florian-rose.vercel.app'),
  title: "Florian BARJON | Développeur Front-end React & Next.js",
  description: "Développeur web spécialisé en React et Next.js. Création de sites web performants et responsifs. Basé en Haute-Savoie, France.",
  keywords: [
    "développeur web",
    "front-end",
    "React",
    "Next.js",
    "Haute-Savoie",
    "développeur React",
    "freelance",
    "création site web",
    "Florian BARJON"
  ],
  authors: [{ name: "Florian BARJON" }],
  creator: "Florian BARJON",
  publisher: "Florian BARJON",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://portfolio-florian-rose.vercel.app",
    title: "Florian BARJON | Développeur Front-end React & Next.js",
    description: "Développeur web spécialisé en React et Next.js. Création de sites web performants et responsifs. Basé en Haute-Savoie, France.",
    siteName: "Portfolio de Florian BARJON",
    images: [{
      url: "/og-image.jpg", // Ajoutez une image OpenGraph si vous en avez une
      width: 1200,
      height: 630,
      alt: "Florian BARJON - Développeur Front-end"
    }]
  },
  alternates: {
    canonical: "https://portfolio-florian-rose.vercel.app"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={twMerge(
        inter.variable, calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans"
        )} >{children}</body>
    </html>
  );
}
