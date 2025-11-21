/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: "/mdvs_glass",
  reactStrictMode: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  images: {
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },
}

module.exports = nextConfig
