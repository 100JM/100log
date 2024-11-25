import Contact from "./components/Contact";
import PostList from "./components/PostList";
import HighlightPost from "./components/HighlightPost";
import PostPagination from "./components/PostPagination";
import TagGroup from "./components/TagGroup";

export default function Home() {

  return (
    <main className="max-w-[900px] m-auto flex justify-center items-center flex-col break-keep break-words">
      <div className="w-full flex flex-col justify-center pt-20 mb-16 text-center">
        <h2 className="text-6xl">100JM</h2>
        <h5 className="text-2xl">Welcome to my blog👋</h5>
      </div>
      <HighlightPost />
      <TagGroup path={'All posts'} />
      <PostList />
      <PostPagination />
      <Contact />
    </main>
  );
}
