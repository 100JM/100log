import Header from '@/app/components/Header';
import Contact from '@/app/components/Contact';
import Tags from '@/app/components/Tags';
import { Skeleton } from '@/components/ui/skeleton';

import { getPostBySlug } from '@/app/utils/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';

export default async function PostPage({
    params,
}: {
    params: { slug: string };
}) {
    const post = await getPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    return (
        <div>
            <Header />
            <main className="w-full h-full max-w-[900px] m-auto flex justify-center items-center flex-col break-keep break-words">
                <article className="w-full my-10 p-6 flex justify-center">
                    <div className="w-3/4">
                        <h1 className="text-5xl mb-4">{post.title}</h1>
                        <div className="flex flex-wrap text-lg mb-8 justify-start items-end text-slate-500 gap-6">                            
                            <Tags tags={post.tags} date={post.date} />
                        </div>
                        <div className="prose prose-lg">
                            <MDXRemote source={post.content} />
                        </div>
                    </div>
                    <div className="w-1/4">
                        <Skeleton className="h-[450px] rounded-xl" />
                    </div>
                </article>
                <Contact />
            </main>
            <footer className="flex justify-center items-center w-full h-20 text-sm font-thin text-slate-400 dark:text-[#f7f9fb]">
                © 2024. Jongmin Baek all rights reserved.
            </footer>
        </div>
    );
};