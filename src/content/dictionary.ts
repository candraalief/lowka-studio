export type Language = "id" | "en";

export interface Dictionary {
  nav: {
    story: string;
    value: string;
    work: string;
    workflow: string;
    contact: string;
    statusBadge: string;
  };
  hero: {
    eyebrow: string;
    greeting: string;
    headlinePart1: string;
    headlineHighlight: string;
    headlinePart2: string;
    description: string;
    ctaWork: string;
    ctaTalk: string;
  };
  story: {
    sectionTag: string;
    title: string;
    question1: string;
    answer1: string;
    question2: string;
    answer2: string;
    missionTitle: string;
    missionBody: string;
    personalTitle: string;
    personalBody: string;
  };
  values: {
    sectionTag: string;
    title: string;
    subtitle: string;
    items: {
      step: string;
      title: string;
      description: string;
    }[];
  };
  projects: {
    sectionTag: string;
    title: string;
    subtitle: string;
    viewLive: string;
    firstProjectTag: string;
    client: string;
    category: string;
    description: string;
    highlights: string[];
    techStack: string[];
  };
  workflow: {
    sectionTag: string;
    title: string;
    subtitle: string;
    steps: {
      number: string;
      title: string;
      desc: string;
    }[];
    toolsTitle: string;
  };
  contact: {
    sectionTag: string;
    title: string;
    subtitle: string;
    waButton: string;
    emailButton: string;
    githubButton: string;
    footerNote: string;
  };
}

export const dictionaries: Record<Language, Dictionary> = {
  id: {
    nav: {
      story: "Tentang Kami",
      value: "Solusi",
      work: "Karya",
      workflow: "Cara Kerja",
      contact: "Hubungi Kami",
      statusBadge: "Menerima Proyek Baru",
    },
    hero: {
      eyebrow: "LowKa Studio • Solusi Website UMKM",
      greeting: "Selamat Datang di LowKa Studio",
      headlinePart1: "Kami membangun ",
      headlineHighlight: "website pertama",
      headlinePart2: " yang simpel, kencang, dan ramah kantong untuk bisnis kamu.",
      description:
        "LowKa Studio membantu pemilik usaha dan UMKM di Indonesia memiliki kehadiran digital resmi tanpa pusing biaya sewa server mahal atau sistem yang berbelit-belit. Cepat, efisien, dan siap digunakan untuk meningkatkan kepercayaan pelanggan.",
      ctaWork: "Lihat Proyek Kami",
      ctaTalk: "Konsultasi via WhatsApp",
    },
    story: {
      sectionTag: "Filosofi & Profil Studio",
      title: "Kenapa Namanya LowKa Studio?",
      question1: "Dari mana nama 'LowKa' berasal?",
      answer1:
        "Awalnya berangkat dari kata 'Low-Cost'. Dalam kebiasaan pelafalan orang Indonesia, 'Co' terdengar menjadi 'Ko'. Sehingga muncul nama LowKo.",
      question2: "Lalu mengapa huruf 'O' diganti menjadi 'A'?",
      answer2:
        "'A' adalah huruf pertama dalam alfabet. Ini sesuai dengan misi utama kami: membantu bisnis kamu memiliki 'Website Pertama' (langkah awal) untuk hadir di internet dengan biaya yang transparan dan masuk akal.",
      missionTitle: "Realita UMKM Indonesia",
      missionBody:
        "Sebagian besar pemilik UMKM belum punya website bukan karena tidak butuh, tapi karena takut biaya langganan bulanan yang mahal dan bingung cara mengurusnya. Pendekatan kami simpel: yang penting bisnis kamu ada dulu di internet, mudah ditemukan di Google, dan langsung dipercaya calon pembeli.",
      personalTitle: "Rekayasa Perangkat Lunak Modern",
      personalBody:
        "Didukung oleh talenta Ilmu Komputer IPB University, kami menerapkan prinsip rekayasa perangkat lunak modern untuk menciptakan website yang ringan, tahan banting, dan berkinerja tinggi tanpa membebani keuangan operasional bisnismu.",
    },
    values: {
      sectionTag: "Prinsip Kerja Kami",
      title: "Solusi Ramah Anggaran, Tanpa Gimmick",
      subtitle:
        "Fokus pada apa yang benar-benar dibutuhkan bisnis kamu untuk mulai menghasilkan dari internet.",
      items: [
        {
          step: "01",
          title: "Yang Penting Ada Dulu di Internet",
          description:
            "Company profile ringkas dan profesional. Nama bisnismu resmi terdaftar di web, mudah dicari pelanggan di Google, dan meningkatkan kredibilitas saat menawarkan produk.",
        },
        {
          step: "02",
          title: "Bebas Biaya Server Berat",
          description:
            "Memanfaatkan arsitektur web modern (Next.js & static/edge hosting) sehingga operasional bulanan sangat minim atau bahkan gratis. Tidak ada tagihan hosting membengkak.",
        },
        {
          step: "03",
          title: "Langsung Nyambung ke WhatsApp",
          description:
            "Tanpa alur keranjang belanja yang rumit. Pelanggan cukup melihat katalog produk, lalu klik satu tombol untuk langsung mengobrol dan bertransaksi di WhatsApp bisnismu.",
        },
      ],
    },
    projects: {
      sectionTag: "Portofolio Proyek",
      title: "Karya Nyata Kami",
      subtitle: "Membuktikan bahwa website berbiaya hemat tetap bisa tampil elegan dan berkinerja tinggi.",
      viewLive: "Buka Website Langsung",
      firstProjectTag: "Proyek Klien • Live",
      client: "FuRi Valentine Batik",
      category: "Katalog & Profil Batik Khas Kota Bekasi",
      description:
        "FuRi Valentine Batik adalah pengrajin batik khas Kota Bekasi yang memproduksi seragam instansi, seragam sekolah, dan bahan kain custom. Kami membangun katalog digital yang elegan namun ringan agar mudah dibagikan kepada calon mitra dinas maupun pembeli perorangan.",
      highlights: [
        "Skor performa 95+ di perangkat seluler dengan waktu muat instan.",
        "Integrasi reservasi kunjungan galeri & pesanan seragam langsung ke WhatsApp.",
        "Zero server overhead: Di-deploy di Cloudflare Pages tanpa biaya hosting bulanan.",
      ],
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Cloudflare Pages"],
    },
    workflow: {
      sectionTag: "Alur Kerja",
      title: "3 Langkah Simpel Bersama Kami",
      subtitle: "Tidak perlu paham teknis coding, serahkan seluruh proses pengembangannya pada kami.",
      steps: [
        {
          number: "01",
          title: "Ngobrol Santai",
          desc: "Ceritakan profil bisnis, foto produk, dan nomor WhatsApp yang ingin kamu hubungkan ke website.",
        },
        {
          number: "02",
          title: "Proses Pembuatan",
          desc: "Kami menyusun tata letak, menuliskan konten yang jelas, dan membangun website yang responsif di HP.",
        },
        {
          number: "03",
          title: "Online & Tayang",
          desc: "Website resmi bisnismu tayang di internet dan langsung siap kamu sebar ke calon pembeli!",
        },
      ],
      toolsTitle: "Teknologi yang Kami Gunakan:",
    },
    contact: {
      sectionTag: "Mulai Sekarang",
      title: "Siap Punya Website Pertama?",
      subtitle:
        "Punya bisnis yang belum punya website atau ingin konsultasi santai dulu soal biayanya? Langsung hubungi kami via WhatsApp atau email.",
      waButton: "Hubungi via WhatsApp",
      emailButton: "Kirim Email",
      githubButton: "Lihat Repositori",
      footerNote: "© 2026 LowKa Studio. Solusi website simpel, kencang, dan ramah anggaran untuk UMKM Indonesia.",
    },
  },
  en: {
    nav: {
      story: "About Us",
      value: "Solutions",
      work: "Works",
      workflow: "Workflow",
      contact: "Contact Us",
      statusBadge: "Accepting New Projects",
    },
    hero: {
      eyebrow: "LowKa Studio • Web Solutions for MSMEs",
      greeting: "Welcome to LowKa Studio",
      headlinePart1: "We build the ",
      headlineHighlight: "very first website",
      headlinePart2: " that's fast, simple, and budget-friendly for your business.",
      description:
        "LowKa Studio helps Indonesian businesses and MSMEs establish an official digital presence without expensive server overhead or convoluted setups. Fast, efficient, and engineered to build customer trust.",
      ctaWork: "Explore Our Work",
      ctaTalk: "Consult via WhatsApp",
    },
    story: {
      sectionTag: "Philosophy & Studio Profile",
      title: "Why The Name LowKa Studio?",
      question1: "Where does 'LowKa' come from?",
      answer1:
        "It originated from 'Low-Cost'. In Indonesian everyday phonetics, 'Co' is pronounced as 'Ko', giving birth to the name LowKo.",
      question2: "Then why swap the 'O' with 'A'?",
      answer2:
        "'A' is the first letter of the alphabet. It aligns with our core mission: helping your business secure its 'First Website' (the essential initial step) to be present online at an honest, reasonable price.",
      missionTitle: "The Indonesian MSME Reality",
      missionBody:
        "Most MSME owners don't lack a website because they don't want one, but because they fear expensive recurring hosting bills and complicated maintenance. Our philosophy is straightforward: get your business online first, make it easy to discover on Google, and instantly build credibility with your customers.",
      personalTitle: "Modern Software Engineering",
      personalBody:
        "Backed by Computer Science talent from IPB University, we apply modern software engineering principles to build websites that are lightweight, resilient, and high-performing without straining your operational budget.",
    },
    values: {
      sectionTag: "Our Core Principles",
      title: "Budget-Friendly Solutions, No Gimmicks",
      subtitle:
        "Focusing strictly on what your business truly needs to start building digital trust.",
      items: [
        {
          step: "01",
          title: "Get Online First (The Essential Profile)",
          description:
            "A concise, professional company profile. Your business brand officially exists online, gets indexed by Google, and elevates your credibility when pitching clients.",
        },
        {
          step: "02",
          title: "Free from Costly Server Overhead",
          description:
            "Leveraging modern web architecture (Next.js & static/edge hosting) so recurring operational costs are practically zero. No surprise hosting bills.",
        },
        {
          step: "03",
          title: "Direct WhatsApp Conversion",
          description:
            "No cumbersome cart checkout flows. Visitors effortlessly browse your offerings and connect with one single tap directly to your WhatsApp chat.",
        },
      ],
    },
    projects: {
      sectionTag: "Featured Portfolio",
      title: "Our Real-World Work",
      subtitle: "Proving that a cost-efficient website can look premium and perform with blazing speed.",
      viewLive: "Visit Live Website",
      firstProjectTag: "Client Project • Live",
      client: "FuRi Valentine Batik",
      category: "Signature Bekasi Batik Catalog & Corporate Profile",
      description:
        "FuRi Valentine Batik is an authentic batik artisan from Bekasi City producing corporate uniforms, school uniforms, and custom fabrics. We developed an elegant, lightweight digital catalog to present to institutional clients and retail buyers alike.",
      highlights: [
        "95+ mobile performance score with near-instant page loading.",
        "Direct gallery booking and custom order inquiries routed straight to WhatsApp.",
        "Zero server overhead: Deployed seamlessly on Cloudflare Pages with zero monthly hosting fees.",
      ],
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Cloudflare Pages"],
    },
    workflow: {
      sectionTag: "Workflow",
      title: "3 Simple Steps to Launch",
      subtitle: "No technical jargon needed—we handle the entire design and engineering process for you.",
      steps: [
        {
          number: "01",
          title: "Casual Discovery Chat",
          desc: "Share your business profile, product photos, and the WhatsApp number you want to connect to your website.",
        },
        {
          number: "02",
          title: "Crafting & Coding",
          desc: "We organize the layout, craft clear copywriting, and build a sleek, mobile-optimized website.",
        },
        {
          number: "03",
          title: "Live & Ready to Share",
          desc: "Your official business website goes live on the internet, ready to be discovered and shared with clients!",
        },
      ],
      toolsTitle: "Technologies We Rely On:",
    },
    contact: {
      sectionTag: "Get Started",
      title: "Ready to Build Your First Website?",
      subtitle:
        "Have a business that is not yet on Google, or want to consult on cost-efficient options? Reach out directly via WhatsApp or email.",
      waButton: "Contact via WhatsApp",
      emailButton: "Send an Email",
      githubButton: "View Repository",
      footerNote: "© 2026 LowKa Studio. Simple, fast, and budget-friendly web solutions for Indonesian businesses.",
    },
  },
};
