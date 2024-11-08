import Link from "next/link";

interface TagsInterface {
    tags: string[] | undefined;
    date: string;
}

const Tags: React.FC<TagsInterface> = ({ tags, date }) => {
    return (
        <div className="flex flex-wrap gap-4 text-sm">
            <time className="tag post-time">{date} POSTED.</time>
            {tags?.map((tag) => (
                <Link
                    key={tag}
                    href={`/tags/${tag}`}
                    className="tag cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                    {tag}
                </Link>
            ))}
        </div>
    );
};

export default Tags;