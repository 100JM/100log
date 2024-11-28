import Contact from "@/app/components/Contact";
import PostList from "@/app/components/PostList";
import PostPagination from "@/app/components/PostPagination";
import TagGroup from "@/app/components/TagGroup";

import { metadata } from "@/app/layout";
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {

    return {
        title: `${metadata.title} - ${params.tag}`,
        description: metadata.description,
        keywords: metadata.keywords,
        openGraph: {
            title: `${metadata.title} - ${params.tag}`,
            description: metadata.description || '',
            images: metadata.openGraph?.images,
            locale: metadata.openGraph?.locale,
            type: 'website',
            url: `${metadata.openGraph?.url}tags/${params.tag}`,
            siteName: metadata.openGraph?.siteName
        },
        twitter: {
            title: `${metadata.title} - ${params.tag}`,
            description: metadata.description || '',
            images: metadata.twitter?.images
        },
    };
}

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