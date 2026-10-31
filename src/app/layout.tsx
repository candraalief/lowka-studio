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
  title: "Candra AAP — LowKa Studio | Website Simpel & Ramah Anggaran untuk UMKM",
  description:
    "Mahasiswa Ilmu Komputer IPB & founder LowKa Studio. Membantu bisnis dan UMKM di Indonesia memiliki website pertama yang simpel, kencang, dan ramah kantong.",
  keywords: [
    "Candra Agung Alief Prasetyo",
    "LowKa Studio",
    "Website UMKM",
    "Pembuatan Website Murah",
    "Ilmu Komputer IPB",
    "Valentine Batik",
    "Portfolio Web Developer",
  ],
  authors: [{ name: "Candra Agung Alief Prasetyo" }],
  openGraph: {
    title: "Candra AAP — LowKa Studio",
    description:
      "Membantu UMKM Indonesia punya website pertama yang simpel, kencang, dan ramah kantong.",
    url: "https://github.com/candraalief/lowka-studio",
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
      <body className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
        {children}
      </body>
    </html>
  );
}
