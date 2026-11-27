import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  allowedDevOrigins: ['192.168.0.107'],
  async rewrites() {
    if (process.env.CLOUDINARY_CV_URL) {
      return [
        {
          source: '/cv',
          destination: process.env.CLOUDINARY_CV_URL,
        },
      ];
    }
    return [];
  },
};

export default nextConfig;
