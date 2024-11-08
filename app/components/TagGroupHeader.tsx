'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { fadeTransitionSettings, fadeVariants } from "../utils/framer";

interface TagGroupHeaderInterface {
    tag: string;
    cnt: number;
}

const TagGroupHeader: React.FC<TagGroupHeaderInterface> = ({ tag, cnt }) => {

    return (
        <AnimatePresence>
            <motion.div
                key="tag-header"
                variants={fadeVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={fadeTransitionSettings}
                className="slected-tag gap-x-2"
            >
                <p>{tag}</p>
                <p className="slected-tag-cnt">{`(${cnt})`}</p>
            </motion.div>
        </AnimatePresence>
    );
};

export default TagGroupHeader;