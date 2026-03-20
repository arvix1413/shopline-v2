/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'images.unsplash.com',
      'img.shoplineapp.com',
      'shoplineimg.com',
      'd31xv78q8gnfco.cloudfront.net',
      'cdn.prod.website-files.com',
      'plus-shoplineapp-com.s3.ap-southeast-1.amazonaws.com',
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
