import Contact from '@/app/components/Contact';
import PostHeaderNav from '@/app/components/PostHeaderNav';
import Tags from '@/app/components/Tags';
import RelatedPost from '@/app/components/RelatedPost';
import NextPrevPost from '@/app/components/NextPrevPost';

import { getPostBySlug } from '@/app/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import rehypeSlug from 'rehype-slug';
import rehypePrism from 'rehype-prism-plus';
import remarkGfm from 'remark-gfm';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

const PostPage = async ({ params }: { params: { slug: string }; }) => {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
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
            </div>
        </main>
    );
};

export default PostPage;