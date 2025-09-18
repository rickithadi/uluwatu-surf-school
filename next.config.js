/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: ['instagram.com', 'scontent.cdninstagram.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig