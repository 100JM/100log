import Header from '@/app/components/Header';
import Contact from '@/app/components/Contact';
import PostHeaderNav from '@/app/components/PostHeaderNav';
import Tags from '@/app/components/Tags';
import RelatedPost from '@/app/components/RelatedPost';

import { getPostBySlug } from '@/app/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus';

import 'prism-themes/themes/prism-vsc-dark-plus.css';

const PostPage = async ({ params }: { params: { slug: string }; }) => {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <Header />
            <main className="w-full h-full max-w-[1100px] m-auto flex justify-center items-center flex-col break-keep break-words">
                <div className="w-full flex justify-center">
                    <article className="w-full my-10 p-6 flex justify-center">
                        <div className="w-full">
                            <h1 className="text-5xl mb-4">{post.title}</h1>
                            <div className="flex flex-wrap text-lg mb-8 justify-start items-end">
                                <Tags tags={post.tags} date={post.date} />
                            </div>
                            <div className="post-contents">
                                <MDXRemote source={post.content} options={{
                                    mdxOptions: {
                                        rehypePlugins: [
                                            rehypePrism,
                                            rehypeSlug,
                                            [rehypeAutolinkHeadings, { behavior: 'wrap' }]
                                        ]
                                    }
                                }} />
                            </div>
                        </div>
                    </article>
                    <PostHeaderNav headers={post.headers} />
                </div>
                <RelatedPost />
                <Contact />
            </main>
            <footer className="flex justify-center items-center w-full h-20 text-sm font-thin text-slate-400 dark:text-[#f7f9fb]">
                © 2024. Jongmin Baek all rights reserved.
            </footer>
        </div>
    );
};

export default PostPage;