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
      story: "Cerita",
      value: "Solusi",
      work: "Karya",
      workflow: "Cara Kerja",
      contact: "Kontak",
      statusBadge: "Terbuka untuk Proyek",
    },
    hero: {
      eyebrow: "LowKa Studio • Web Builder",
      greeting: "Halo, saya Candra AAP",
      headlinePart1: "Membangun ",
      headlineHighlight: "website pertama",
      headlinePart2: " yang simpel, kencang, dan ramah kantong untuk UMKM Indonesia.",
      description:
        "Mahasiswa Ilmu Komputer IPB & founder LowKa Studio. Saya membantu bisnis lokal memiliki kehadiran digital resmi tanpa pusing biaya server mahal atau sistem yang berbelit-belit.",
      ctaWork: "Lihat Proyek Pertama",
      ctaTalk: "Ngobrol via WhatsApp",
    },
    story: {
      sectionTag: "Filosofi & Latar Belakang",
      title: "Kenapa Namanya LowKa Studio?",
      question1: "Dari mana nama 'LowKa' berasal?",
      answer1:
        "Awalnya berangkat dari kata 'Low-Cost'. Dalam kebiasaan pelafalan orang Indonesia, 'Co' terdengar menjadi 'Ko'. Sehingga muncul nama LowKo.",
      question2: "Lalu mengapa huruf 'O' diganti menjadi 'A'?",
      answer2:
        "'A' adalah huruf pertama dalam alfabet. Ini sesuai dengan misi kami: membantu bisnis kamu memiliki 'Website Pertama' (langkah awal) untuk hadir di internet dengan biaya yang masuk akal dan transparan.",
      missionTitle: "Realita UMKM Indonesia",
      missionBody:
        "Sebagian besar pemilik UMKM belum punya website bukan karena tidak butuh, tapi karena takut biaya langganan bulanan mahal dan bingung cara mengurusnya. Pendekatan saya simpel: yang penting bisnis kamu ada dulu di internet, mudah ditemukan di Google, dan bisa langsung dipercaya calon pembeli.",
      personalTitle: "Di Luar Coding Web",
      personalBody:
        "Sebagai mahasiswa Ilmu Komputer di IPB University, saya juga sangat menikmati dunia game development dan mengeksplorasi efisiensi sistem perangkat lunak yang ringan serta tahan lama.",
    },
    values: {
      sectionTag: "Prinsip Kerja",
      title: "Solusi Ramah Anggaran, Tanpa Gimmick",
      subtitle:
        "Fokus pada apa yang benar-benar dibutuhkan bisnis kamu untuk mulai menghasilkan dari internet.",
      items: [
        {
          step: "01",
          title: "Yang Penting Ada Dulu di Internet",
          description:
            "Company profile ringkas dan profesional. Nama bisnismu resmi terdaftar di web, mudah dicari pelanggan, dan meningkatkan kredibilitas saat menawarkan produk.",
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
            "Tanpa alur keranjang belanja yang rumit. Pelanggan cukup melihat katalog produk, lalu klik satu tombol untuk langsung mengobrol dan bertransaksi di WhatsApp.",
        },
      ],
    },
    projects: {
      sectionTag: "Karya Pertama",
      title: "Studi Kasus Proyek Nyata",
      subtitle: "Membuktikan bahwa website berbiaya hemat tetap bisa tampil elegan dan berkinerja tinggi.",
      viewLive: "Buka Website Langsung",
      firstProjectTag: "Proyek Pertama • Live",
      client: "FuRi Valentine Batik",
      category: "Katalog & Profil Batik Khas Kota Bekasi",
      description:
        "FuRi Valentine Batik adalah pengrajin batik khas Kota Bekasi yang memproduksi seragam instansi, seragam sekolah, dan bahan kain custom. Mereka membutuhkan katalog digital yang elegan namun ringan agar mudah dibagikan kepada calon mitra dinas maupun pembeli perorangan.",
      highlights: [
        "Skor performa 95+ di perangkat seluler dengan muat halaman instan.",
        "Integrasi reservasi kunjungan galeri & pesanan seragam langsung ke WhatsApp.",
        "Zero server overhead: Di-deploy di Cloudflare Pages tanpa biaya hosting bulanan.",
      ],
      techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Cloudflare Pages"],
    },
    workflow: {
      sectionTag: "Cara Kerja",
      title: "3 Langkah Simpel Memulai",
      subtitle: "Tidak perlu paham teknis coding, serahkan semuanya pada kami.",
      steps: [
        {
          number: "01",
          title: "Ngobrol Santai",
          desc: "Ceritakan profil bisnis, foto produk, dan nomor WhatsApp yang ingin kamu gunakan.",
        },
        {
          number: "02",
          title: "Proses Pembuatan",
          desc: "Kami susun struktur, tuliskan konten yang jelas, dan kembangkan website yang responsif di HP.",
        },
        {
          number: "03",
          title: "Online & Tayang",
          desc: "Website resmi tayang di internet dan langsung siap kamu sebar ke calon pembeli!",
        },
      ],
      toolsTitle: "Teknologi yang Digunakan:",
    },
    contact: {
      sectionTag: "Ayo Mulai",
      title: "Siap Punya Website Pertama?",
      subtitle:
        "Punya bisnis yang belum punya website atau ingin konsultasi santai dulu soal biayanya? Langsung sapa saya via WhatsApp atau email.",
      waButton: "Chat via WhatsApp",
      emailButton: "Kirim Email",
      githubButton: "Lihat GitHub",
      footerNote: "Dibuat dengan kode bersih & penuh efisiensi oleh Candra AAP • LowKa Studio.",
    },
  },
  en: {
    nav: {
      story: "Story",
      value: "Solutions",
      work: "Work",
      workflow: "Workflow",
      contact: "Contact",
      statusBadge: "Available for Projects",
    },
    hero: {
      eyebrow: "LowKa Studio • Web Builder",
      greeting: "Hey, I'm Candra AAP",
      headlinePart1: "Crafting the ",
      headlineHighlight: "very first website",
      headlinePart2: " that's fast, simple, and budget-friendly for Indonesian businesses.",
      description:
        "Computer Science student at IPB University & founder of LowKa Studio. I help local businesses establish their official web presence without hefty server bills or convoluted setups.",
      ctaWork: "View First Project",
      ctaTalk: "Let's Talk via WhatsApp",
    },
    story: {
      sectionTag: "Philosophy & Background",
      title: "Why The Name LowKa Studio?",
      question1: "Where does 'LowKa' come from?",
      answer1:
        "It originated from 'Low-Cost'. In Indonesian everyday phonetics, 'Co' is pronounced as 'Ko', giving birth to the name LowKo.",
      question2: "Then why swap the 'O' with 'A'?",
      answer2:
        "'A' is the first letter of the alphabet. It aligns with our core mission: helping your business secure its 'First Website' (the essential initial step) to be present online at an honest, reasonable price.",
      missionTitle: "The Indonesian MSME Reality",
      missionBody:
        "Most MSME owners don't lack a website because they don't want one, but because they fear expensive recurring hosting bills and complicated maintenance. My philosophy is straightforward: get your business online first, make it easy to discover on Google, and instantly build credibility with your customers.",
      personalTitle: "Outside Web Development",
      personalBody:
        "As a Computer Science student at IPB University, I am also passionate about game development and exploring clean, lightweight software systems that run efficiently on modest hardware.",
    },
    values: {
      sectionTag: "Core Principles",
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
      sectionTag: "First Showcase",
      title: "Real-World Case Study",
      subtitle: "Proving that a cost-efficient website can look premium and perform with blazing speed.",
      viewLive: "Visit Live Website",
      firstProjectTag: "First Project • Live",
      client: "FuRi Valentine Batik",
      category: "Signature Bekasi Batik Catalog & Corporate Profile",
      description:
        "FuRi Valentine Batik is an authentic batik artisan from Bekasi City producing corporate uniforms, school uniforms, and custom fabrics. They needed a lightweight, elegant digital catalog to present to institutional clients and walk-in visitors alike.",
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
      subtitle: "No technical jargon needed—we take care of the entire engineering process.",
      steps: [
        {
          number: "01",
          title: "Casual Discovery Chat",
          desc: "Share your business profile, product photos, and the WhatsApp number you want to connect.",
        },
        {
          number: "02",
          title: "Crafting & Coding",
          desc: "We organize the layout, write punchy copy, and build a sleek, mobile-optimized website.",
        },
        {
          number: "03",
          title: "Live & Ready to Share",
          desc: "Your website goes live on the internet, ready to be discovered and shared with clients!",
        },
      ],
      toolsTitle: "Tools & Stack Used:",
    },
    contact: {
      sectionTag: "Let's Connect",
      title: "Ready to Build Your First Website?",
      subtitle:
        "Have a business that is not yet on Google, or want to consult on cost-efficient options? Reach out directly via WhatsApp or email.",
      waButton: "Chat on WhatsApp",
      emailButton: "Send an Email",
      githubButton: "View on GitHub",
      footerNote: "Handcrafted with clean code & efficiency by Candra AAP • LowKa Studio.",
    },
  },
};
