
interface PostDescriptionInterface {
    tags: string[];
    description: string;
}

const PostDescription: React.FC<PostDescriptionInterface> = ({ tags, description}) => {
    return (
        <div className="relative h-full">
            <div className="h-full bg-[#0000007a] rounded-2xl hidden group-hover:block">
                <div className="absolute left-3 top-3">
                    {tags.map((t, i) => {
                        return (
                            <div 
                                key={i}
                                className="tag text-white border-white w-fit mb-2"
                            >
                                {t}
                            </div>
                        )
                    })}
                </div>
                <div className="text-white absolute bottom-0 line-clamp-2 m-4 text-lg">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PostDescription;