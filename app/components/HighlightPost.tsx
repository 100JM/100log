import { getLatestPost } from "../utils/mdx";
import Image from "next/image";
import Link from "next/link";
import Shorts from "./Shorts";
import Tags from "./Tags";
import PostDescription from "./PostDescription";

const HighlightPost: React.FC = async () => {
    const latestPost = await getLatestPost();

    return (
        <div className="w-[90%] mb-16 flex flex-col-reverse gap-6 mlg:w-full mlg:flex-row">
            <Link
                href={`posts/${latestPost.slug}`}
                className="w-full cursor-pointer group h-[600px] sm:h-[680px]"
            >
                    <div className="text-4xl flex items-center justify-start p-2 h-[70px] oblique-text">
                        <span>Latest post.</span>
                    </div>
                    <div className="h-[520px] rounded-xl w-full sm:h-[600px]">
                        <div className="w-full h-[75%] relative sm:h-[80%]">
                            <Image alt="post_img" src={latestPost.thumbnail} priority fill={true} className="rounded-[18px]" />
                            <PostDescription tags={latestPost.tags} description={latestPost.description} />
                        </div>
                        <div className="line-clamp-1 flex items-center mt-3">
                            <Tags tags={undefined} date={latestPost.date} />
                        </div>
                        <h2 className="text-2xl line-clamp-2 mt-3 break-all">{latestPost.title}</h2>
                    </div>
                
            </Link>
            <Shorts />
        </div>
    );
};

export default HighlightPost;