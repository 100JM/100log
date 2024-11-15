import Header from "@/app/components/Header";
import Contact from "@/app/components/Contact";
import PostList from "@/app/components/PostList";
import PostPagination from "@/app/components/PostPagination";
import TagGroup from "@/app/components/TagGroup";

const TagPage = ({ params }: { params: { tag: string } }) => {

    return (
        <div>
            <Header />
            <main className="w-full h-full max-w-[900px] m-auto flex justify-center items-center flex-col break-keep break-words">
                <div className="w-full flex flex-col justify-center pt-20 mb-16 text-center">
                    <h2 className="text-6xl">100JM</h2>
                    <h5 className="text-2xl">Welcome to my blog👋</h5>
                </div>
                <TagGroup path={decodeURIComponent(params.tag)}/>
                <PostList />
                <PostPagination />
                <Contact />
            </main>
            <footer className="flex justify-center items-center w-full h-20 text-sm font-thin text-slate-400 dark:text-[#f7f9fb]">
                © 2024. Jongmin Baek all rights reserved.
            </footer>
        </div>
    );
}

export default TagPage;