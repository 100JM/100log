import { getLatestPost } from "../utils/mdx";
import Shorts from "./Shorts";
import Tags from "./Tags";
import Image from "next/image";
import Link from "next/link";

import 'remixicon/fonts/remixicon.css';

const HighlightPost: React.FC = async () => {
    const latestPost = await getLatestPost();

    console.log(latestPost);
    return (
        <div className="w-[90%] mb-16 flex flex-row gap-6 highlight-post">
            <Link
                href={`posts/${latestPost.slug}`}
                className="h-[600px] w-full cursor-pointer hover:text-slate-500"
            >
                    <div className="text-4xl flex items-center justify-start py-2 h-[70px]">
                        <i className="ri-pushpin-2-line"></i>
                        <span>최신 POST</span>
                    </div>
                    <div className="h-[530px] rounded-xl w-full">
                        <div className="w-full h-3/4 relative">
                            <Image alt="post_img" src={latestPost.thumbnail} priority fill={true} className="rounded-[18px]" />
                        </div>
                        <div className="w-full h-1/4 flex flex-col justify-start">
                            <div className="h-1/2 line-clamp-1 flex items-center">
                                <Tags tags={undefined} date={latestPost.date} />
                            </div>
                            <div className="text-3xl h-1/2 line-clamp-2">{latestPost.title}</div>
                        </div>
                    </div>
                
            </Link>
            <Shorts />
        </div>
    );
};

export default HighlightPost;