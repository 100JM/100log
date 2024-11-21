export interface Post {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
    content: string;
    thumbnail: string;
}

export interface PostShort {
    title: string;
    description: string;
    date: string;
    slug: string;
}

export interface PostWithHeaders {
    title: string;
    description: string;
    date: string;
    slug: string;
    tags: string[];
    content: string;
    thumbnail: string;
    headers: string[];
    realatedPosts: Post[];
    isRelated: boolean;
    nextNprevPost: { next: Post | undefined, prev: Post | undefined}
}