import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // images: {
  //   remotePatterns: [new URL("https://picsum.photos/seed/picsum/200/300")],
  // },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
