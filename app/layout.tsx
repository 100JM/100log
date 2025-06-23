import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Noto_Sans_KR } from "next/font/google"
import 'remixicon/fonts/remixicon.css';
import Script from 'next/script';

import Header from "./components/Header";

const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: "400"
});

export const metadata: Metadata = {
  title: "백종민 개발 블로그",
  description: "웹 개발자 백종민입니다.",
  keywords: ['Web', 'Front-end', 'Javascript', 'blog', 'developer', '개발', '프론트앤드', '웹 개발자', '블로그'],
  openGraph: {
    title: '백종민 개발 블로그',
    description: "웹 개발자 백종민입니다.",
    images: [
      {
        url: 'https://100-log.vercel.app/images/openGraph_image.jpg',
        alt: 'main_logo',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
    url: 'https://100-log.vercel.app/',
    siteName: '100LOG'
  },
  twitter: {
    title: '백종민 개발 블로그',
    description: "웹 개발자 백종민입니다.",
    images: [
      {
        url: 'https://100-log.vercel.app/images/openGraph_image.jpg',
        alt: 'main_logo',
        width: 1200,
        height: 630,
      },
    ],
  },
  alternates: {
    canonical: 'https://100-log.vercel.app/',
  },
  robots: 'index, follow',
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  const GA_MEASUREMENT_ID = process.env.NEXT_GOOGLE_ANALYTICS;

  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={notoSansKR.className}>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
            <Script
              id="google-analytics"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_MEASUREMENT_ID}');
                `,
              }}
            />
          </>
        )}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="blog-theme"
        >
          <Header />
          {children}
          <footer className="flex justify-center items-center w-full h-20 text-sm">
            © 2024. Jongmin Baek all rights reserved.
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
