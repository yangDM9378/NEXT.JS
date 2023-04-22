/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        permanent: true, // 영구
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        permanent: false, // 일시적
      },
    ];
  },
};

module.exports = nextConfig;
