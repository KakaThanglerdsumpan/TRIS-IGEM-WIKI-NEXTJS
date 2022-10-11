/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/thailand-ris' : '',
    reactStrictMode: true,
    swcMinify: true,
    future: { webpack5: true }
}

module.exports = nextConfig
