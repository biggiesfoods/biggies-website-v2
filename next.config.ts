import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Add 300 and 600 to the optimization breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 300, 320, 400],
    deviceSizes: [600, 640, 750, 828, 1080],
  },
};

export default nextConfig;
