import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure proper static export for Vercel
  output: 'standalone',
  
  // Disable image optimization for simpler deployment
  images: {
    unoptimized: true,
  },
  
  // Ensure proper trailing slashes
  trailingSlash: false,
};

export default nextConfig;
