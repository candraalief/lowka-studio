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
      leadTitle: "Studio pembuatan website ",
      leadHighlight: "simpel, kencang, dan ramah kantong untuk bisnis kamu.",
      p1: "Banyak pelaku usaha dan UMKM di Indonesia belum memiliki website bukan karena tidak butuh, tapi karena terintimidasi oleh biaya langganan bulanan yang mahal dan kekhawatiran sistem yang rumit untuk dikelola.",
      p2: "Kenapa namanya LowKa? Awalnya berangkat dari kata 'Low-Cost' yang dalam pelafalan orang Indonesia berbunyi 'Low-Ko'. Lalu huruf 'O' diganti menjadi 'A' karena 'A' adalah huruf pertama dalam alfabet—mewakili fokus kami untuk memberikan website pertama yang simpel bagi bisnis kamu dengan harga yang masuk akal.",
      p3: "Prinsip kami sederhana: yang penting bisnis kamu ada dulu di internet, mudah ditemukan saat dicari di Google, dan langsung menghubungkan calon pembeli ke chat WhatsApp tanpa perantara yang ribet.",
      p4: "Didukung oleh talenta Ilmu Komputer IPB University, kami menggabungkan prinsip rekayasa perangkat lunak modern dengan arsitektur web ringan sehingga website kamu bebas dari tagihan sewa server yang membebani.",
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
      leadTitle: "A web development studio ",
      leadHighlight: "building fast, simple, and budget-friendly websites for your business.",
      p1: "Most business owners and MSMEs in Indonesia don't lack a website because they don't want one, but because they are intimidated by expensive recurring hosting bills and convoluted setups.",
      p2: "Why the name LowKa? It started from 'Low-Cost'. In Indonesian phonetics, 'Co' sounds like 'Ko'. Then we replaced 'O' with 'A' because 'A' is the first letter of the alphabet—representing our mission to build the very first website for your business at a sensible price.",
      p3: "Our philosophy is straightforward: get your business online first, make it effortlessly discoverable on Google, and route customers directly to WhatsApp without confusing friction.",
      p4: "Backed by Computer Science talent from IPB University, we pair modern software engineering practices with lightweight architecture so your website runs lightning-fast without draining your monthly budget.",
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
