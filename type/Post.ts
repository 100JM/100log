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