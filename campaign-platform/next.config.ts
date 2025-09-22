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
  
  // Enable experimental features if needed
  experimental: {
    // Enable app directory (should be default in Next.js 13+)
    appDir: true,
  },
};

export default nextConfig;
