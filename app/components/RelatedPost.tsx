import Link from "next/link";
import Image from "next/image";
import Tags from "./Tags";
import { Post } from "@/type/Post";

interface RelatedPostInterface {
    relatedPosts: Post[];
    isRelated: boolean;
}

const RelatedPost: React.FC<RelatedPostInterface> = ({ relatedPosts, isRelated }) => {

    return (
        <div className="w-full px-6 mt-40">
            <div className="mb-4 text-2xl xxs:text-3xl">
                {
                    isRelated ?
                        <p>관련된 다른 포스트는 어떠세요?</p>
                        :
                        <p>이런 포스트들은 어떠세요?</p>
                }
            </div>
            <div className="grid gap-9 mb-6 mlg:grid-cols-2 mlg:gap-x-14">
                {
                    relatedPosts.map((post) => {
                        return (
                            <Link href={`/posts/${post.slug}`} key={post.slug} className="h-[450px]">
                                <div className="h-[70%] relative">
                                    <Image alt="post_img" src={post.thumbnail} fill className="rounded-2xl" />
                                </div>
                                <div className="line-clamp-1 flex items-center mt-3">
                                    <Tags tags={undefined} date={post.date} />
                                </div>
                                <h2 className="text-3xl line-clamp-2 mt-3">{post.title}</h2>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default RelatedPost;