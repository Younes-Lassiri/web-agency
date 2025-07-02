import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // this enables static export
  images: {
    unoptimized: true, // if you're using <Image>, disables automatic optimization
  },
};

export default nextConfig;
