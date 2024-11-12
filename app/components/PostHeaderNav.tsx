// import { MDXRemote } from 'next-mdx-remote/rsc';
// import { notFound } from 'next/navigation';
// import rehypeSlug from 'rehype-slug';
// import rehypeAutolinkHeadings from 'rehype-autolink-headings'

import { Skeleton } from '@/components/ui/skeleton';

interface PostHeaderNavInterface {
    headers: string[];
}

const PostHeaderNav: React.FC<PostHeaderNavInterface> = ({ headers }) => {
    console.log(headers);
    return (
        <div className="w-[30%] hidden xxl:block">
            <Skeleton className="h-[450px] rounded-xl mt-16 sticky top-28" />
        </div>
    );
};

export default PostHeaderNav;