/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for Cloudflare Pages
  output: 'standalone',

  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.cloudflare.com',
      },
    ],
    // Use unoptimized images for static export if needed
    unoptimized: process.env.NODE_ENV === 'development',
  },

  // Disable x-powered-by header for security
  poweredByHeader: false,

  // Strict mode for better development experience
  reactStrictMode: true,

  // Trailing slashes configuration
  trailingSlash: false,

  // Experimental features
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

export default nextConfig;
