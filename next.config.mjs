/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingRoot: undefined,
  },
  trailingSlash: false,
  poweredByHeader: false,
};

export default nextConfig;
