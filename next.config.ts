import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
module.exports = { 
  basePath: isProd ? '/personal-website' : '', 
  assetPrefix: isProd ? '/personal-website/' : '', 
  images: { unoptimized: true, }, 
};

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
};

export default nextConfig;
