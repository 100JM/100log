import { NextResponse } from 'next/server';
import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '@/type/Post';
import { postsDirectory } from '@/app/utils/mdx';

export async function GET(): Promise<NextResponse<Post[]>> {
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
        }).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return NextResponse.json(posts);
};