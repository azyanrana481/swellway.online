/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/swellway-store/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/swellway-store' : '',
}

module.exports = nextConfig
