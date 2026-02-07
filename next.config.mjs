/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output configuration for Cloudflare Pages static export
  output: 'export',

  // Image optimization - must be unoptimized for static export
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
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
    // Static export requires unoptimized images
    unoptimized: true,
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
