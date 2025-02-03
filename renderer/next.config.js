/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? '../app' : '.next',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  webpack: (config) => {
    return config;
  },
});