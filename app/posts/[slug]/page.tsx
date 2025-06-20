import Contact from '@/app/components/Contact';
import PostHeaderNav from '@/app/components/PostHeaderNav';
import Tags from '@/app/components/Tags';
import RelatedPost from '@/app/components/RelatedPost';
import NextPrevPost from '@/app/components/NextPrevPost';
import Script from 'next/script';

import { metadata } from '@/app/layout';
import { Metadata } from 'next';
import { getPostBySlug } from '@/app/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';
import GiscusComments from '@/app/components/GiscusComments';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

export async function generateMetadata({ params }: {params: { slug: string }}): Promise<Metadata> {
    const post = await getPostBySlug(params.slug);

    if (post) {
        return {
            title: `${post.title} - ${metadata.title}`,
            description: post.description,
            keywords: post.tags,
            openGraph: {
                title: `${post.title} - ${metadata.title}`,
                description: post.description,
                images: [
                    {
                        url: post.thumbnail,
                        alt: `${params.slug} - image`,
                        width: 1200,
                        height: 630,
                    },
                ],
                locale: metadata.openGraph?.locale,
                type: 'website',
                url: `${metadata.openGraph?.url}posts/${params.slug}`,
                siteName: metadata.openGraph?.siteName
            },
            twitter: {
                title: `${post.title} - ${metadata.title}`,
                description: post.description,
                images: [
                    {
                        url: post?.thumbnail,
                        alt: `${params.slug} - image`,
                        width: 1200,
                        height: 630,
                    },
                ],
            },
        };
    } else {
        return metadata;
    }
};

const PostPage = async ({ params }: { params: { slug: string }; }) => {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    // 구조화된 데이터 생성
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "description": post.description,
        "image": post.thumbnail,
        "author": {
            "@type": "Person",
            "name": "백종민",
            "url": "https://100-log.vercel.app"
        },
        "publisher": {
            "@type": "Organization",
            "name": "100LOG",
            "logo": {
                "@type": "ImageObject",
                "url": "https://100-log.vercel.app/images/openGraph_image.jpg"
            }
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://100-log.vercel.app/posts/${post.slug}`
        },
        "keywords": post.tags.join(", "),
        "articleSection": post.tags[0] || "개발",
        "inLanguage": "ko-KR"
    };

    return (
        <>
            <Script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <main className="max-w-[1100px] m-auto flex justify-center items-center flex-col break-keep break-words">
                <div className='w-full animate-fadeIn'>
                    <div className="w-full flex justify-center">
                        <article className="w-full my-10 p-6 flex flex-col justify-center">
                            <div className="w-full">
                                <h1 className="text-5xl mb-4">{post.title}</h1>
                                <div className="flex flex-wrap text-lg mb-8 justify-start items-end">
                                    <Tags tags={post.tags} date={post.date} />
                                </div>
                                <div className="post-contents">
                                    <MDXRemote source={post.content} options={{
                                        mdxOptions: {
                                            remarkPlugins: [remarkGfm],
                                            rehypePlugins: [
                                                rehypePrism,
                                                rehypeSlug,
                                            ]
                                        }
                                    }} />
                                </div>
                            </div>
                            <NextPrevPost nextNprevPost={post.nextNprevPost} />
                        </article>
                        <PostHeaderNav headers={post.headers} />
                    </div>
                    {
                        post.realatedPosts.length > 0 && <RelatedPost relatedPosts={post.realatedPosts} isRelated={post.isRelated} />
                    }
                    <Contact />
                    <GiscusComments slug={post.slug} />
                </div>
            </main>
        </>
    );
};

export default PostPage;