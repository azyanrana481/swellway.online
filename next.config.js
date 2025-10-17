/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  basePath: '/swellway.online',
  assetPrefix: '/swellway.online/',
}

module.exports = nextConfig
