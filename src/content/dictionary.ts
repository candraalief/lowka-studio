export type Language = "id" | "en";

export interface Dictionary {
  nav: {
    work: string;
    contact: string;
    sayHello: string;
  };
  hero: {
    eyebrow: string;
    leadTitle: string;
    leadHighlight: string;
    p1: string;
    p2: string;
    p3: string;
    contactLink: string;
  };
  work: {
    title: string;
    subtitle: string;
    projects: {
      name: string;
      urlDisplay: string;
      url: string;
      category: string;
      logoText: string;
      badge?: string;
    }[];
  };
  contact: {
    heading: string;
    email: string;
    instagram: string;
    instagramUrl: string;
    copyright: string;
  };
}

export const dictionaries: Record<Language, Dictionary> = {
  id: {
    nav: {
      work: "Karya",
      contact: "Kontak",
      sayHello: "Say Hello",
    },
    hero: {
      eyebrow: "HEY, KAMI LOWKA STUDIO",
      leadTitle: "Membangun website ",
      leadHighlight: "simpel, kencang, dan ramah kantong untuk bisnis kamu.",
      p1: "Banyak bisnis di Indonesia belum punya website bukan karena tidak butuh, tapi karena bingung cara mulainya dan takut biayanya mahal.",
      p2: "LowKa berangkat dari kata 'Low-Cost' (Low-Ko). Huruf 'O' kami ganti 'A' sebagai simbol langkah awal untuk website pertamamu.",
      p3: "Prinsip kami cukup sederhana, yang penting bisnismu ada dulu di internet, mudah dicari di Google, dan langsung terhubung ke bisnismu tanpa perantara.",
      contactLink: "Hubungi kami",
    },
    work: {
      title: "/karya.",
      subtitle: "Proyek pilihan yang telah kami kerjakan.",
      projects: [
        {
          name: "FuRi Valentine Batik",
          urlDisplay: "valentinebatik.pages.dev",
          url: "https://valentinebatik.pages.dev/",
          category: "Katalog Batik Khas Bekasi & Seragam",
          logoText: "Valentine Batik",
          badge: "Featured",
        },
      ],
    },
    contact: {
      heading: "Say Hello",
      email: "lowkastudio@gmail.com",
      instagram: "@lowkastudio",
      instagramUrl: "https://instagram.com/lowkastudio",
      copyright: "© LowKa Studio 2026",
    },
  },
  en: {
    nav: {
      work: "My Work",
      contact: "Contact",
      sayHello: "Say Hello",
    },
    hero: {
      eyebrow: "HEY, WE'RE LOWKA STUDIO",
      leadTitle: "Crafting the first ",
      leadHighlight: "fast, simple, and budget-friendly website for your business.",
      p1: "Most businesses in Indonesia don't have a website not because they don't need one, but because they're unsure where to start and fear high costs.",
      p2: "LowKa stems from 'Low-Cost' (Low-Ko). We replaced 'O' with 'A' as a symbol of taking the first step for your very first website.",
      p3: "Our principle is simple: get your business online first, make it easy to find on Google, and connect customers directly without friction.",
      contactLink: "Contact us",
    },
    work: {
      title: "/work.",
      subtitle: "Selected work we've taken on in the past.",
      projects: [
        {
          name: "FuRi Valentine Batik",
          urlDisplay: "valentinebatik.pages.dev",
          url: "https://valentinebatik.pages.dev/",
          category: "Bekasi Batik Catalog & Corporate Uniforms",
          logoText: "Valentine Batik",
          badge: "Featured",
        },
      ],
    },
    contact: {
      heading: "Say Hello",
      email: "lowkastudio@gmail.com",
      instagram: "@lowkastudio",
      instagramUrl: "https://instagram.com/lowkastudio",
      copyright: "© LowKa Studio 2026",
    },
  },
};
