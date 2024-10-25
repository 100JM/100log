'use client';

import { Skeleton } from "@/components/ui/skeleton"

const HighlightPost: React.FC = () => {
    return (
        <div className="w-[90%] mb-16 highlight-post">
            <Skeleton className="h-[600px] rounded-xl" />
        </div>
    );
};

export default HighlightPost;