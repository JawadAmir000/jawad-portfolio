/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for GitHub Pages static hosting
  basePath: '/jawad-portfolio',
  assetPrefix: '/jawad-portfolio/',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
