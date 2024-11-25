/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: "https://100-log.vercel.app/", // 배포된 사이트의 기본 URL
    generateRobotsTxt: false,          // robots.txt 자동 생성 여부
    sitemapSize: 5000,                // 한 파일에 포함할 최대 URL 수
    generateIndexSitemap: false,      // 여러 개의 sitemap 생성 시 index sitemap 여부
    exclude: ["/secret", "/admin/*"], // 제외할 경로
};

module.exports = config;