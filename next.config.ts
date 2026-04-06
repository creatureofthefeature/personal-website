import type { NextConfig } from "next";

export const isProd = process.env.NODE_ENV === 'production';
module.exports = { 
  basePath: isProd ? '/personal-website' : '', 
  assetPrefix: isProd ? '/personal-website/' : '', 
  images: { unoptimized: true, }, 
};

// export const getPath = (path: string): string => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
