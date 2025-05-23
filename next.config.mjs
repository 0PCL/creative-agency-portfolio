/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/creative-agency-portfolio',
  assetPrefix: '/creative-agency-portfolio/',
  trailingSlash: true,
  distDir: 'out',
}

export default nextConfig
