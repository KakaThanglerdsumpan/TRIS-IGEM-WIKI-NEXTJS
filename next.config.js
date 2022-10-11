// const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
    //assetPrefix: process.env.NODE_ENV === 'production' ? '/thailand-ris' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/thailand-ris' : '',
    async redirects() {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true
            }
        ]
    },
    reactStrictMode: true
    // assetPrefix: isProd ? '/thailand-ris/' : ''
    /*
    experimental: {
        runtime: 'experimental-edge'
    }
    */
}

module.exports = nextConfig
