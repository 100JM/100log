import Link from "next/link";
import { Post } from "@/type/Post";

interface NextPrevPostInterface {
    nextNprevPost: {
        next: Post | undefined;
        prev: Post | undefined;
    }
}

const NextPrevPost: React.FC<NextPrevPostInterface> = ({ nextNprevPost }) => {
    return (
        <div className="w-full mt-12 sm:flex">
            {
                nextNprevPost.prev ?
                <Link href={`/posts/${nextNprevPost.prev.slug}`} className="prev-post-btn mb-4 sm:flex-1 sm:mr-16 sm:mb-0">
                    <i className="ri-arrow-left-line text-2xl text-black dark:text-[#f8f8f8]"></i>
                    <p className="pl-3 grid text-start">
                        <span className="text-sm text-gray-600 dark:text-[#f8f8f8]">이전 포스트</span>
                        <span className="line-clamp-1 text-lg text-black dark:text-[#f8f8f8]">{nextNprevPost.prev.title}</span>
                    </p>
                </Link>
                :
                <div className="flex-1"></div>
            }
            {
                nextNprevPost.next ?
                <Link href={`/posts/${nextNprevPost.next.slug}`} className="next-post-btn sm:flex-1">
                    <i className="ri-arrow-right-line text-2xl text-black dark:text-[#f8f8f8]"></i>
                    <p className="pr-3 grid text-end">
                        <span className="text-sm text-gray-600 dark:text-[#f8f8f8]">다음 포스트</span>
                        <span className="line-clamp-1 text-lg text-black dark:text-[#f8f8f8]">{nextNprevPost.next.title}</span>
                    </p>
                </Link>
                :
                <div className="flex-1"></div>
            }
        </div>
    );
};

export default NextPrevPost;