'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderPageButton: React.FC = () => {
    const pathName = usePathname();

    return (
        <div className="flex items-center gap-4">
            <Link className={`text-base hover:underline py-1 px-2 sm:text-lg ${pathName === '/about' ? '' : 'home-btn'}`} href="/">
                <p>100log</p>
            </Link>
            <Link className={`text-base hover:underline py-1 px-2 sm:text-lg ${pathName === '/about' ? 'home-btn' : ''}`} href="/about">
                <p>About</p>
            </Link>
        </div>
    )
}

export default HeaderPageButton;