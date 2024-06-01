import runtimeCaching from 'next-pwa/cache.js'
import withPWA from 'next-pwa'
import withPlaiceholder from '@plaiceholder/next'

// eslint-disable-next-line import/no-anonymous-default-export
export default (phase, { defaultConfig }) => {
    /**
     * @type {import('next').NextConfig}
     */
    const nextConfig = {
        output: 'export',
        trailingSlash: true,
        reactStrictMode: true,
        swcMinify: true,
        images: {
            formats: ['image/avif', 'image/webp'],
            loader: 'custom',
            loaderFile: './src/constant/images.ts',
            path: 'https://ik.imagekit.io/jerensl/',
            remotePatterns: [
                {
                    protocol: 'https',
                    hostname: 'www.jerenslensun.com/**',
                    port: '',
                },
                {
                    protocol: 'https',
                    hostname: 'ik.imagekit.io/jerensl/**',
                    port: '',
                },
            ],
        },
        compiler: {
            removeConsole: process.env.NODE_ENV !== 'development',
        },
    }

    const plugins = [
        withPWA({
            dest: 'public',
            disable: process.env.NODE_ENV === 'development',
            register: true,
            skipWaiting: true,
            customWorkerDir: 'src/worker',
            runtimeCaching,
            cacheOnFrontEndNav: true,
        }),
        withPlaiceholder,
    ]
    const config = plugins.reduce((acc, next) => next(acc), {
        ...nextConfig,
    })
    return config
}
