import Link from "next/link";
import { getPostsShort } from "../utils/mdx";

const Shorts = async () => {
    const postsShort = await getPostsShort();

    return (
        <div className="h-[600px] rounded-xl w-1/3 hidden xxl:block">
            <div className="text-4xl flex items-center justify-start p-2 pl-4 h-[70px] oblique-text">
                <span>Shorts.</span>
            </div>
            <div className="shorts-list overflow-y-auto max-h-[500px] flex flex-col gap-y-6 text-sm pl-4">
                {
                    postsShort.map((s) => {
                        return (
                            <Link
                                key={s.slug}
                                href={`/posts/${s.slug}`}
                                className="hover:underline"
                            >
                                <p className="text-gray-500 text-xs mb-1">{s.date}</p>
                                <p>{s.description}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Shorts;