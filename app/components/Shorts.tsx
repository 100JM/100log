import Link from "next/link";
import { getPostsShort } from "../utils/mdx";

const Shorts = async () => {
    const postsShort = await getPostsShort();

    return (
        <div className="h-[400px] rounded-xl w-full mlg:w-1/3 mlg:h-[680px]">
            <div className="text-4xl flex items-center justify-start p-2 h-[70px] oblique-text mlg:pl-4">
                <span>Shorts.</span>
            </div>
            <ul className="shorts-list overflow-y-auto max-h-[330px] flex flex-col gap-y-4 text-sm mlg:pl-4 mlg:max-h-[610px] mlg:gap-y-6">
                {
                    postsShort.map((s) => {
                        return (
                            <li key={s.slug}>
                                <Link
                                    href={`/posts/${s.slug}`}
                                    className="hover:underline"
                                >
                                    <p className="text-gray-500 text-xs mb-1">{s.date}</p>
                                    <p>{s.description}</p>
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Shorts;