import { getLatestPost } from "../utils/mdx";
import Image from "next/image";
import Link from "next/link";
import Shorts from "./Shorts";
import Tags from "./Tags";
import PostDescription from "./PostDescription";

import 'remixicon/fonts/remixicon.css';

const HighlightPost: React.FC = async () => {
    const latestPost = await getLatestPost();

    return (
        <div className="w-[90%] mb-16 flex flex-col-reverse gap-6 mlg:w-full mlg:flex-row">
            <Link
                href={`posts/${latestPost.slug}`}
                className="h-[600px] w-full cursor-pointer group"
            >
                    <div className="text-4xl flex items-center justify-start p-2 h-[70px] oblique-text">
                        <span>Latest post.</span>
                    </div>
                    <div className="h-[530px] rounded-xl w-full">
                        <div className="w-full h-3/4 relative">
                            <Image alt="post_img" src={latestPost.thumbnail} priority fill={true} className="rounded-[18px]" />
                            <PostDescription tags={latestPost.tags} description={latestPost.description} />
                        </div>
                        <div className="w-full h-1/4">
                            <div className="h-1/2 line-clamp-1 flex items-center">
                                <Tags tags={undefined} date={latestPost.date} />
                            </div>
                            <h2 className="text-3xl line-clamp-2">{latestPost.title}</h2>
                        </div>
                    </div>
                
            </Link>
            <Shorts />
        </div>
    );
};

export default HighlightPost;