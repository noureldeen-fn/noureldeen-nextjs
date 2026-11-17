import path from "path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  turbopack: {
    resolveAlias: {
      "next/dist/build/polyfills/polyfill-module": "./lib/empty-polyfill.js",
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "../build/polyfills/polyfill-module": path.resolve(process.cwd(), "lib/empty-polyfill.js"),
        "next/dist/build/polyfills/polyfill-module": path.resolve(process.cwd(), "lib/empty-polyfill.js"),
      };
    }
    return config;
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
    optimizeCss: true,
    inlineCss: true,
  },
};

export default nextConfig;
