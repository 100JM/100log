'use client';

import Shorts from "./Shorts";

import 'remixicon/fonts/remixicon.css';
import { Skeleton } from "@/components/ui/skeleton"

const HighlightPost: React.FC = () => {
    return (
        <div className="w-[90%] mb-16 flex flex-row gap-6 highlight-post">
            <div className="h-[600px] w-2/3">
                <div className="text-4xl flex items-center justify-start py-2 h-[70px]">
                    <i className="ri-pushpin-2-line"></i>
                    <span>최신 POST</span>
                </div>
                <Skeleton className="h-[530px] rounded-xl" />
            </div>
            <Shorts />
        </div>
    );
};

export default HighlightPost;