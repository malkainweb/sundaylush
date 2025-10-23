import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "./util/LenisProvider";

export const metadata: Metadata = {
  title: "Sunday Lush | Professional Lash Extension Certification & Training",
  description:
    "Master the art of lash extensions with Sunday Lush's comprehensive certification courses. Learn classic lash techniques, advanced methods, and build your beauty business with expert-led training designed for all skill levels.",
  keywords: [
    "lash extension courses",
    "lash certification",
    "eyelash extension training",
    "classic lash course",
    "advanced lash techniques",
    "beauty certification",
    "lash artist training",
    "online lash courses",
    "professional lash education",
    "lash business training",
  ],
  authors: [{ name: "Sunday Lush Co" }],
  creator: "Sunday Lush Co",
  publisher: "Sunday Lush Co",
  metadataBase: new URL("https://sundaylush-mvgb.vercel.app/"), // Replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sunday Lush | Professional Lash Extension Certification & Training",
    description:
      "Transform your passion into a career. Learn professional lash extension techniques through step-by-step training that makes mastery simple, fun, and achievable.",
    url: "https://sundaylush-mvgb.vercel.app/", // Replace with your actual domain
    siteName: "Sunday Lush",
    images: [
      {
        url: "/gallery/im7.webp", // This will be resolved relative to metadataBase
        width: 1200,
        height: 630,
        alt: "Sunday Lush - Professional Lash Extension Training",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunday Lush | Professional Lash Extension Certification",
    description:
      "Master lash extensions with expert-led courses. Build your beauty business with confidence and clarity.",
    images: ["/gallery/im7.webp"],
    creator: "@sundaylush", // Replace with your actual Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code", // Add when you have it
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
  category: "Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
