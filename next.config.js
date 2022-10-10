/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/name-of-repository' : '',
}

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

module.exports = nextConfig

