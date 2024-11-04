import { getAllPosts } from "../utils/mdx";

import { Skeleton } from "@/components/ui/skeleton"

const PostList: React.FC = async () => {
    const post = await getAllPosts();

    // console.log(post);
    return (
        <div className="w-[90%] grid gap-6 gap-y-10 mb-6 post-list">
            {Array.from({length: 6}, (_, index) => {
                return (
                    <Skeleton key={index} className="h-[450px] rounded-xl" />
                )
            })}
        </div>
    );
};

export default PostList;