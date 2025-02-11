'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

const HeaderPageButton: React.FC = () => {
    const pathName = usePathname();

    return (
        <div className="p-2 flex items-center gap-4">
            <Link className={`text-lg hover:underline ${pathName === '/about' ? '' : 'home-btn'}`} href="/">
                <p>100log</p>
            </Link>
            <Link className={`text-lg hover:underline ${pathName === '/about' ? 'home-btn' : ''}`} href="/about">
                <p>About</p>
            </Link>
        </div>
    )
}

export default HeaderPageButton;