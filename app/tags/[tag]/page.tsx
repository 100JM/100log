import Contact from "@/app/components/Contact";
import PostList from "@/app/components/PostList";
import PostPagination from "@/app/components/PostPagination";
import TagGroup from "@/app/components/TagGroup";

const TagPage = ({ params }: { params: { tag: string } }) => {

    return (
        <main className="max-w-[900px] m-auto flex justify-center items-center flex-col break-keep break-words">
            <div className="w-full flex flex-col justify-center pt-20 mb-16 text-center">
                <h2 className="text-6xl">100JM</h2>
                <h5 className="text-2xl">Welcome to my blog👋</h5>
            </div>
            <TagGroup path={decodeURIComponent(params.tag)} />
            <PostList />
            <PostPagination />
            <Contact />
        </main>
    );
}

export default TagPage;