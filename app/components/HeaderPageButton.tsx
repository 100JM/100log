'use client';

import { useState } from "react";

import Link from "next/link";

const HeaderPageButton: React.FC = () => {
    const [selectedPage, setSelectedPage] = useState<string>('home');

    return (
        <div className="p-2 flex items-center gap-4">
            <Link className={`text-lg hover:underline ${selectedPage === 'home' ? 'home-btn' : ''}`} href="/" onClick={() => setSelectedPage('home')}>
                <p>100log</p>
            </Link>
            <Link className={`text-lg hover:underline ${selectedPage === 'about' ? 'home-btn' : ''}`} href="/about/me" onClick={() => setSelectedPage('about')}>
                <p>About</p>
            </Link>
        </div>
    )
}

export default HeaderPageButton;