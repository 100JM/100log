'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { fadeTransitionSettings, fadeVariants } from "../utils/framer";

interface TagGroupHeaderInterface {
    tag: string;
}

const TagGroupHeader: React.FC<TagGroupHeaderInterface> = ({ tag }) => {

    return (
        <AnimatePresence>
            <motion.p
                key="tag-header"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={fadeTransitionSettings}
                className="slected-tag"
            >
                {tag}
            </motion.p>
        </AnimatePresence>
    );
};

export default TagGroupHeader;