import Link from "next/link";
import { getTagGroup, getTagCount } from "../utils/mdx";

import TagGroupHeader from "./TagGroupHeader";

interface TagGroupInterface {
    path: string
}

const TagGroup: React.FC<TagGroupInterface> = async ({ path }) => {
    const tagGroup = await getTagGroup();
    const tagCount = await getTagCount();

    return (
        <section className="w-[90%] mb-8 flex flex-col justify-center items-center mlg:w-full mlg:mb-16">
            <TagGroupHeader tag={path} cnt={tagCount[path]} />
            <div className="max-w-[90%] flex flex-wrap gap-x-4 gap-y-3 mlg:max-w-[60%]">
                {
                    tagGroup.map((t) => {
                        return (
                            <Link
                                href={t === 'All posts' ? '/' : `/tags/${t}`}
                                className={`tag-link ${path === t ? 'font-semibold' : ''}`}
                                key={t}
                            >
                                <div className="flex">
                                    <p className="hover:underline">{t}</p>
                                    {
                                        <p className="leading-3 text-xs">({tagCount[t]})</p>
                                    }
                                </div>
                            </Link>
                        );
                    })
                }
            </div>
        </section>
    );
};

export default TagGroup;