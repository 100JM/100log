import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Do_Hyeon } from "next/font/google"

const dohyeon = Do_Hyeon({
    subsets: ['latin'],
    weight: "400"
});

export const metadata: Metadata = {
  title: "백종민 개발 블로그",
  description: "성장하자",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={dohyeon.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="blog-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
