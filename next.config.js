/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
  output: 'export', // Enables static export for GitHub Pages
  basePath: '/Porttfolio.github.io', // Base path should match your repo name
};

module.exports = nextConfig;
