/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'img.shoplineapp.com',
      'shoplineimg.com',
      'd31xv78q8gnfco.cloudfront.net',
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
