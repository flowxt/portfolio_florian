import type { Metadata } from "next";
import { Inter, Calistoga} from 'next/font/google';
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const calistoga = Calistoga({ subsets: ['latin'], variable: '--font-serif', weight: ["400"], });

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(
        inter.variable, calistoga.variable, 
        "bg-gray-900 text-white antialiased font-sans"
        )} >{children}</body>
    </html>
  );
}
