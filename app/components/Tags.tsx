interface TagsInterface {
    tags: string[] | undefined;
    date: string;
}

const Tags: React.FC<TagsInterface> = ({ tags, date }) => {
    return (
        <div className="flex flex-wrap gap-4">
            <time className="tag post-time">{date} POSTED.</time>
            {tags?.map((tag) => (
                <a key={tag} className="tag cursor-pointer hover:bg-slate-500 hover:text-[#f7f9fb] active:bg-slate-500 active:text-[#f7f9fb]">
                    {tag}
                </a>
            ))}
        </div>
    );
};

export default Tags;