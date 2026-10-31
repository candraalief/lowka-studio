import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "LowKa Studio — Website Pertama Simpel & Ramah Anggaran untuk UMKM",
  description:
    "Studio pembuatan website untuk UMKM dan bisnis di Indonesia. Membantu bisnismu memiliki website pertama yang simpel, kencang, dan ramah kantong tanpa biaya server mahal.",
  keywords: [
    "LowKa Studio",
    "Website UMKM",
    "Jasa Pembuatan Website",
    "Website Ramah Anggaran",
    "Company Profile Murah",
    "Valentine Batik",
    "Next.js Cloudflare Pages",
  ],
  authors: [{ name: "LowKa Studio" }],
  openGraph: {
    title: "LowKa Studio — Solusi Website UMKM Indonesia",
    description:
      "Website pertama yang simpel, kencang, dan ramah kantong untuk bisnis kamu.",
    siteName: "LowKa Studio",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen bg-[#fbfbfd] text-[#121316] flex flex-col">
        {children}
      </body>
    </html>
  );
}
