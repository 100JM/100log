import { NextResponse } from 'next/server';

export async function GET() {
    const robotsTxt = `
    User-agent: *
    Disallow:
    Sitemap: https://100-log.vercel.app/sitemap.xml`;

    return new NextResponse(robotsTxt, {
        headers: {
            'Content-Type': 'text/plain',
        },
    });
}
