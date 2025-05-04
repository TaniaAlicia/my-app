import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images : {
      domains: ['i.blogs.es','i.pinimg.com']
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
