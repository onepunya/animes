/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'otakudesu.best',
      },
      {
        protocol: 'https',
        hostname: '**.otakudesu.best',
      },
      {
        protocol: 'https',
        hostname: '**.wp.com',
      }
    ],
  },
};

export default nextConfig;
