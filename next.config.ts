import type { NextConfig } from "next";

const isCloudflare = process.env.CF_PAGES === "1" || process.env.OUTPUT_EXPORT === "true";

const nextConfig: NextConfig = {
  // Static export mode untuk Cloudflare Pages
  ...(isCloudflare && {
    output: "export",
    images: {
      unoptimized: true,
    },
  }),
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
