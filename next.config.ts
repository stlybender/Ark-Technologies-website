import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // The product page was briefly at /pulse before being renamed.
      { source: "/pulse", destination: "/ai-powered-crm", permanent: true },
    ];
  },
};

export default nextConfig;
