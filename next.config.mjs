// next.config.mjs
import createMDX from '@next/mdx';
import remarkGfm from 'remark-gfm';  // GitHub Flavored Markdown 지원 (선택사항)
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
    // 추가할 부분
    experimental: {
        mdxRs: true
    },
};

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],  // 선택사항
        rehypePlugins: [rehypeRaw],           // 필요한 rehype 플러그인 추가 가능
    },
});

// nextConfig와 MDX 설정을 함께 내보냅니다
export default withMDX(nextConfig);