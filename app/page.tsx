import Header from "./components/Header";
import Contact from "./components/Contact";
import PostList from "./components/PostList";
import HighlightPost from "./components/HighlightPost";
import PostPagination from "./components/PostPagination";
import TagGroup from "./components/TagGroup";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="w-full h-full max-w-[900px] m-auto flex justify-center items-center flex-col break-keep break-words">
        <div className="w-full flex flex-col justify-center pt-20 mb-16 text-center">
          <h2 className="text-6xl">100JM</h2>
          <h5 className="text-2xl">Welcome to my blog👋</h5>
        </div>
        <HighlightPost />
        <TagGroup />
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
