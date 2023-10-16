import type { StorybookConfig } from '@storybook/nextjs'
import remarkGfm from 'remark-gfm'
import path from 'path'

const config: StorybookConfig = {
    framework: {
        name: '@storybook/nextjs',
        options: {
            builder: {
                useSWC: true,
            },
        },
    },
    docs: {
        autodocs: 'tag',
    },
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        '@storybook/addon-mdx-gfm',
        'storybook-dark-mode',
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
    ],
    webpackFinal: (config: any) => {
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                require('tailwindcss'),
                                require('autoprefixer'),
                            ],
                        },
                    },
                },
            ],
            include: path.resolve(__dirname, '../'),
        })
        return config
    },
}

export default config
