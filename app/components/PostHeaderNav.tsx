import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

interface PostHeaderNavInterface {
    headers: string[];
}

const PostHeaderNav: React.FC<PostHeaderNavInterface> = ({ headers }) => {
    let headerToString: string = '';

    headers.map((h) => headerToString += h);

    return (
        <>
            {
                headerToString !== '' ?
                    <div className="w-[30%] hidden xxl:block my-16">
                        <div className="post-nav max-h-[600px] sticky top-28 overflow-auto flex flex-col gap-2 pl-2">
                            <MDXRemote source={headerToString} options={{
                                mdxOptions: {
                                    rehypePlugins: [
                                        rehypeSlug,
                                        [rehypeAutolinkHeadings, { behavior: 'wrap' }]
                                    ]
                                }
                            }} />
                        </div>
                    </div>
                    :
                    <div className="w-[30%] hidden xxl:block"></div>
            }
        </>
    );
};

export default PostHeaderNav;