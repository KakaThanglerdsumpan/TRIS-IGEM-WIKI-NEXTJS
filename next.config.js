/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: process.env.NODE_ENV === 'production' ? '/thailand-ris' : '',
    reactStrictMode: true
    /*
    experimental: {
        runtime: 'experimental-edge'
    }
    */
}

module.exports = nextConfig
