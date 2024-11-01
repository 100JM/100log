'use client';

import { Skeleton } from "@/components/ui/skeleton"

const Shorts: React.FC = () => {
    return (
        <Skeleton className="h-[600px] rounded-xl w-1/3 hidden xxl:block" />
    );
};

export default Shorts;