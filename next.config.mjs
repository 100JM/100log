// next.config.mjs
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';

/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'github.com',
            },
            {
                protocol: 'https',
                hostname: 'velog.io',
            },
            {
                protocol: 'https',
                hostname: 'velog.velcdn.com',  // 이미지 도메인 추가
            }
        ],
    },
    async headers() {
        return [
            {
                source: "/robots.txt",
                headers: [
                    {
                        key: "Content-Type",
                        value: "text/plain",
                    },
                ],
            },
        ];
    },
    async rewrites() {
        return [
            {
                source: "/robots.txt",
                destination: "/api/robots",
            },
        ];
    },
};

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeRaw,
        ],
    },
});

export default withMDX(nextConfig);