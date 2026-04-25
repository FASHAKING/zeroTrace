import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/proof/:id',
        destination: '/proof?id=:id',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
