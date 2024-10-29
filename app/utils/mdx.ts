import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/type/Post';

const postsDirectory = path.join(process.cwd(), 'posts');

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
        };
    } catch {
        return null;
    }
};