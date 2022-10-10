/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.igem.wiki',
        port: '',
        pathname: '/teams/4314/wiki/**',
      },
    ],
  },
}
