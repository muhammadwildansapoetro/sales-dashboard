import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "upload.wikimedia.org",
      },
      {
        hostname: "static.vecteezy.com",
      },
    ],
  },
};

export default nextConfig;
