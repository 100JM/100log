const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'posts');

function getAllPosts() {
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

function getTagGroup() {
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

    const tagArray = [];

    posts.map((p) => {
        p.tags.map((t) => {
            tagArray.push(t);
        })
    });

    return tagArray.filter((v, i) => tagArray.indexOf(v) === i);
};

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: "https://100-log.vercel.app/", // 배포된 사이트의 기본 URL
    generateRobotsTxt: false,               // robots.txt 자동 생성 여부
    changefreq: 'daily',
    priority: 1.0,
    sitemapSize: 5000,                      // 한 파일에 포함할 최대 URL 수
    generateIndexSitemap: false,            // 여러 개의 sitemap 생성 시 index sitemap 여부
    exclude: ['/api/*'],
    additionalPaths: async () => {
        const posts = getAllPosts();
        const tags = getTagGroup();
        const routes = [];

        posts.map((post) => {
            return (
                routes.push({
                    loc: `/posts/${post.slug}`,
                    lastmod: post.date,
                    changefreq: 'weekly',
                    priority: 0.8,
                })
            )
        });

        tags.map((tag) => {
            return (
                routes.push({
                    loc: `/tags/${tag}`,
                    lastmod: new Date().toISOString(),
                    changefreq: 'weekly',
                    priority: 0.5,
                })
            )
        })

        return routes;
    },
};

module.exports = config;