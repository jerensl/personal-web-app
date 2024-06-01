import runtimeCaching from 'next-pwa/cache.js'
import withPWA from 'next-pwa'
import withPlaiceholder from '@plaiceholder/next'
import withBundleAnalyzer from '@next/bundle-analyzer'

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
            path: 'https://ik.imagekit.io/jerensl/',
            domains: ['www.jerenslensun.com', 'ik.imagekit.io'],
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
        withBundleAnalyzer({
            enabled: process.env.ANALYZE === 'true',
        }),
        withPlaiceholder,
    ]
    const config = plugins.reduce((acc, next) => next(acc), {
        ...nextConfig,
    })
    return config
}
