import Contact from "./components/Contact";
import PostList from "./components/PostList";
import HighlightPost from "./components/HighlightPost";
import PostPagination from "./components/PostPagination";
import TagGroup from "./components/TagGroup";
import Script from 'next/script';

export default function Home() {
  // 메인 페이지 구조화된 데이터
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "100LOG",
    "description": "웹 개발자 백종민의 개발 블로그",
    "url": "https://100-log.vercel.app",
    "author": {
      "@type": "Person",
      "name": "백종민",
      "jobTitle": "프론트엔드 웹 개발자",
      "url": "https://100-log.vercel.app/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "100LOG",
      "logo": {
        "@type": "ImageObject",
        "url": "https://100-log.vercel.app/images/openGraph_image.jpg"
      }
    },
    "inLanguage": "ko-KR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://100-log.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <Script
        id="website-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
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
    </>
  );
}
