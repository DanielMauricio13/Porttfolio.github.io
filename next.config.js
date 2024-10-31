/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  output: 'export',    // Export static files for GitHub Pages
  basePath: '/Porttfolio.github.io
};

module.exports = nextConfig;