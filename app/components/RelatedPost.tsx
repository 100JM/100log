import { Skeleton } from "@/components/ui/skeleton"

const RelatedPost: React.FC = () => {
    return (
        <div className="w-full px-6 mt-40">
            <div className="mb-4 text-3xl">
                <p>관련된 다른 포스트는 어떠세요?</p>
            </div>
            <div className="grid gap-6 gap-y-10 mb-6 mlg:grid-cols-2">
                {Array.from({ length: 4 }, (_, index) => {
                    return (
                        <div key={index} className="h-[450px]">
                            <Skeleton className="h-2/3 rounded-2xl" />
                            <div className="h-1/3 mt-3">
                                <Skeleton className="h-11 w-36 rounded-full" />
                                <Skeleton className="h-11 mt-3 rounded-2xl" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default RelatedPost;