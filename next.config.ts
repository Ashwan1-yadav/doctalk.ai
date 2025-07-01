import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: {
    //@ts-ignore
    autoPrerender: false,
  },
};

module.exports = {
  images: {
    domains: ['ui-avatars.com', 'images.unsplash.com'],
  }
  
};

export default nextConfig;
