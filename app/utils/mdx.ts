import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/type/Post';

export const postsDirectory = path.join(process.cwd(), 'posts');

export async function getAllPosts(): Promise<Post[]> {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                title: data.title,
                description: data.description,
                date: data.date,
                slug: fileName.replace(/\.mdx$/, ''),
                tags: data.tags,
                content,
                thumbnail: data.thumbnail
            };
        });

    return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
};

export async function getPostBySlug(slug: string): Promise<Post | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            title: data.title,
            description: data.description,
            date: data.date,
            slug,
            tags: data.tags,
            content,
            thumbnail: data.thumbnail
        };
    } catch {
        return null;
    }
};

export async function getLatestPost(): Promise<Post> {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            return {
                title: data.title,
                description: data.description,
                date: data.date,
                slug: fileName.replace(/\.mdx$/, ''),
                tags: data.tags,
                content,
                thumbnail: data.thumbnail
            };
        }).reduce((latestPost, post ) => {
            return new Date(post.date).getTime() > new Date(latestPost.date).getTime() ? post : latestPost;
        })

    return posts;
};