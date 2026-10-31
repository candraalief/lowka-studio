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
    p4: string;
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
    whatsapp: string;
    whatsappNumber: string;
    github: string;
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
      p1: "Banyak UMKM di Indonesia belum punya website bukan karena tidak butuh, namun karena biaya yang tidak diketahui.",
      p2: "LowKa berangkat dari kata 'Low-Cost' (Low-Ko). Sekali payment untuk perusahaanmu tanpa biaya langganan yang membingungkan.",
      p3: "Prinsip kami simpel: yang penting bisnismu ada dulu di internet, mudah dicari di Google, dan langsung terhubung ke WhatsApp.",
      p4: "Dibangun dengan teknologi web modern oleh talenta Ilmu Komputer IPB tanpa beban server bulanan.",
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
      email: "candraaliefp@gmail.com",
      whatsapp: "Chat via WhatsApp",
      whatsappNumber: "+62 858-6614-0707",
      github: "candraalief",
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
      p1: "Most businesses in Indonesia don't lack a website because they don't need one, but because of unknown, hidden costs.",
      p2: "LowKa stems from 'Low-Cost' (Low-Ko). A single one-time payment for your company with zero confusing recurring fees.",
      p3: "Our philosophy is simple: get your business online first, make it easy to find on Google, and connect customers directly to WhatsApp.",
      p4: "Built with modern lightweight web technology by IPB University Computer Science talent—free from monthly server bills.",
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
      email: "candraaliefp@gmail.com",
      whatsapp: "Chat via WhatsApp",
      whatsappNumber: "+62 858-6614-0707",
      github: "candraalief",
      copyright: "© LowKa Studio 2026",
    },
  },
};
