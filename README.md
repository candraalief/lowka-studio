# LowKa Studio • Portfolio

> **"Membangun website pertama yang simpel, kencang, dan ramah kantong untuk UMKM Indonesia."**  
> *Crafting the very first website that's fast, simple, and budget-friendly for Indonesian businesses.*

Website portofolio 1-halaman (*single-page scroll*) bergaya editorial dan *user-centric* (terinspirasi dari [olaolu.dev](https://olaolu.dev/)) untuk **Candra Agung Alief Prasetyo (Candra AAP)**, Mahasiswa Ilmu Komputer IPB University dan pendiri **LowKa Studio**.

---

## 💡 Filosofi Brand: LowKa Studio

1. **Berangkat dari "Low-Cost"**: Dalam pelafalan fonetik lokal Indonesia, *Low-Co* berbunyi **Low-Ko**.
2. **Huruf 'O' diubah menjadi 'A' (LowKa)**:
   - **"A" adalah huruf pertama dalam alfabet**, merepresentasikan **"Website Pertama" / "Langkah Pertama"** bagi pelaku usaha untuk hadir di internet.
   - Tanpa biaya server bulanan yang mahal, tanpa sistem yang membingungkan. Yang terpenting: **bisnis kamu ada dulu di internet, terdaftar di Google, dan langsung terhubung ke WhatsApp.**

---

## ✨ Fitur Utama

- **Single-Page Vertical Scroll:** Alur bercerita dari perkenalan, filosofi nama, nilai untuk UMKM, karya pertama, hingga kontak.
- **Bilingual Switcher (ID / EN):** Pilihan bahasa instan (Indonesia & English) dengan penyimpanan preferensi di `localStorage`.
- **Studi Kasus FuRi Valentine Batik:** Showcase proyek nyata pengrajin batik khas Kota Bekasi ([valentinebatik.pages.dev](https://valentinebatik.pages.dev/)).
- **Zero Server Overhead:** Siap di-deploy statis/edge ke Cloudflare Pages atau Vercel tanpa biaya bulanan.
- **Skor Performa Tinggi:** Dibangun dengan Next.js App Router dan Tailwind CSS untuk akses super cepat di jaringan seluler.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React 19, TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Target Deployment:** Cloudflare Pages / Vercel

---

## 🚀 Menjalankan Secara Lokal

```bash
# Clone repositori
git clone https://github.com/candraalief/lowka-studio.git
cd lowka-studio

# Install dependensi
npm install

# Jalankan server development
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser kamu.

---

## 🌐 Build & Deployment (Cloudflare Pages)

```bash
npm run build
```

Untuk deploy ke Cloudflare Pages:
- **Build command:** `npx @cloudflare/next-on-pages` atau `npm run build`
- **Output directory:** `.next` atau `out`

---

## 📬 Kontak

- **Founder:** Candra Agung Alief Prasetyo
- **Email:** [candraaliefp@gmail.com](mailto:candraaliefp@gmail.com)
- **WhatsApp:** [+62 858-6614-0707](https://wa.me/6285866140707)
- **GitHub:** [@candraalief](https://github.com/candraalief)
