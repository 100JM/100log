'use client';

import { useTheme } from "next-themes";
import Giscus from "@giscus/react";

interface CommentsInterface {
    slug: string;
}

const GiscusComments: React.FC<CommentsInterface> = ({ slug }) => {
    const { theme } = useTheme();

    return (
        <div className="px-6">
            <Giscus
                id={`comments-${slug}`}
                repo="100JM/100log"
                repoId="R_kgDONFqFig"
                category="100log comments"
                categoryId="DIC_kwDONFqFis4Ckk_M"
                mapping="pathname"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="bottom"
                theme={theme === 'light' ? 'light_tritanopia' : 'dark_tritanopia'}
                lang="ko"
                strict="0"
            />
        </div>
    );
};

export default GiscusComments;