// next.config.mjs
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';  // GitHub Flavored Markdown 지원 (선택사항)

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
        ],
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],  // 선택사항
        rehypePlugins: [],           // 필요한 rehype 플러그인 추가 가능
    },
});

// nextConfig와 MDX 설정을 함께 내보냅니다
export default withMDX(nextConfig);