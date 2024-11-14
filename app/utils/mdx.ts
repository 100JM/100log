import * as fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostShort, PostWithHeaders } from '@/type/Post';

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

export async function getPostBySlug(slug: string): Promise<PostWithHeaders | null> {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        const headerPattern = /^#{1,6}\s+(.+)$/gm;

        /* 포스트 상세 페이지 header list */
        const headerList = content.split('\n').filter((line) => line.match(headerPattern)).map(h => h.replace('\r', '\n'));

        /* 연관 포스트, 없을시 가장 최근 포스트, 최대 4개 */
        let realatedPosts = await getAllPosts().then(
            (post) => post.filter((p) => {
                return (
                    p.tags.some((i) => data.tags.includes(i))
                );
            })
            .filter((rp) => rp.title !== data.title).slice(0, 4)
        );

        let isRelated = true;

        if (realatedPosts.length === 0) {
            realatedPosts = await getAllPosts().then((post) => post.filter((p) => p.title !== data.title).slice(0, 4));
            isRelated = false;
        }

        return {
            title: data.title,
            description: data.description,
            date: data.date,
            slug,
            tags: data.tags,
            content,
            thumbnail: data.thumbnail,
            headers: headerList,
            realatedPosts: realatedPosts,
            isRelated: isRelated
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
        }).reduce((latestPost, post) => {
            return new Date(post.date).getTime() > new Date(latestPost.date).getTime() ? post : latestPost;
        });

    return posts;
};

export async function getTagGroup(): Promise<string[]> {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                tags: data.tags,
                date: data.date,
            };
        }).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    const tagArray: string[] = [];
    posts.map((p) => {
        p.tags.map((t: string) => {
            tagArray.push(t);
        })
    })
    tagArray.unshift('All posts');

    return tagArray.filter((v, i) => tagArray.indexOf(v) === i);
};

export async function getTagCount(): Promise<{ [key: string]: number }> {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                tags: data.tags,
            };
        });
    const tagArray: string[] = [];
    posts.map((p) => {
        p.tags.map((t: string) => {
            tagArray.push(t);
        })
    })
    tagArray.unshift('All posts');


    const tagCount = tagArray.reduce<{ [key: string]: number }>((p, c) => {
        if (c === 'All posts') {
            p[c] = posts.length;
            return p;
        } else {
            p[c] = (p[c] || 0) + 1;
            return p;
        }
    }, {});

    return tagCount;
}

export async function getPostsShort(): Promise<PostShort[]> {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames
        .filter((fileName) => fileName.endsWith('.mdx'))
        .map((fileName) => {
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data } = matter(fileContents);

            return {
                title: data.title,
                description: data.description,
                date: data.date,
                slug: fileName.replace(/\.mdx$/, ''),
            };
        }).sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));

    return posts;
};