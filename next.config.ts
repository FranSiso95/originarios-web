import type { NextConfig } from "next";

const enPages = process.env.GITHUB_PAGES === "true";
const base = enPages ? "/originarios-web" : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: base,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: base },
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
