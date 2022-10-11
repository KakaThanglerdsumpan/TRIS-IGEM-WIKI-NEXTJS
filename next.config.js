// const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    //assetPrefix: process.env.NODE_ENV === 'production' ? '/thailand-ris' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/thailand-ris' : '',
    reactStrictMode: false
    // assetPrefix: isProd ? '/thailand-ris/' : ''
    /*
    experimental: {
        runtime: 'experimental-edge'
    }
    */
}

module.exports = nextConfig
