'use client';

import { Skeleton } from "@/components/ui/skeleton"

const PostList: React.FC = () => {
    return (
        <div className="w-[90%] grid gap-6 gap-y-10 mb-6 post-list">
            {Array.from({length: 10}, (_, index) => {
                return (
                    <Skeleton key={index} className="h-[450px] rounded-xl" />
                )
            })}
        </div>
    );
};

export default PostList;