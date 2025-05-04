import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
      domains: ['i.pinimg.com']
  },

  async redirects() {
    return [
      {
        source: "/messages",
        destination: "/",
        permanent: true,
      }
    ];
  },
  };

export default nextConfig;
