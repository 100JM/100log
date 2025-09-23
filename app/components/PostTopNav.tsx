'use client';

import { useState } from "react";

const PostTopNav = ({ headers }: { headers: string[] }) => {
    const [showNav, setShowNav] = useState<boolean>(true);

    const headerToString = headers.map((h) => h.replace('\n', '').trim());

    const createHeaderSlug = (headers: string) => {
        return headers.replaceAll('#', '')
            .trim()
            .toLowerCase()
            .replace(/[^a-z0-9가-힣\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .trim();
    };

    return (
        <div className="post-top-nav w-full p-4 mb-8 xxl:hidden rounded-xl">
            {headerToString.length > 0 &&
                headerToString.map((h) => (
                    h.split(' ')[0] === '##' ?
                        <h2 key={h}>
                            <a href={`#${createHeaderSlug(h)}`}>{h.replaceAll('#', '').trim()}</a>
                        </h2>
                        :
                        showNav ?
                            h.split(' ')[0] === '###' ?
                                <h3 key={h}>
                                    <a href={`#${createHeaderSlug(h)}`}>{h.replaceAll('#', '').trim()}</a>
                                </h3>
                                :
                                <h4 key={h}>
                                    <a href={`#${createHeaderSlug(h)}`}>{h.replaceAll('#', '').trim()}</a>
                                </h4>
                            :
                            null
                ))
            }
            <div className="font-bold flex justify-end text-sm mt-2">
                <button type="button" className="hover:text-gray-600"  onClick={() => setShowNav(!showNav)}>
                    {showNav ?
                        <span>
                            <i className="ri-arrow-up-s-fill"></i>
                            숨기기
                        </span>
                        :
                        <span>
                            <i className="ri-arrow-down-s-fill"></i>
                            목차 보기
                        </span>
                    }
                </button>
            </div>
        </div>
    );
};

export default PostTopNav;