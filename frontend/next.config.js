/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,      // true -> false로 바꿔준다. 
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  }
}
module.exports = nextConfig

module.exports = {
  images: {
      domains: [
        'images.unsplash.com', 
        
      ]
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({})
