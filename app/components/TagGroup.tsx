'use client';

import Link from "next/link";

import { useState, useEffect } from "react";
import usePost from "../store/usePost";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence, motion } from 'framer-motion';
import { fadeTransitionSettings, fadeVariants } from "../utils/framer";

const TagGroup: React.FC = () => {
    const { postList, slectedTag } = usePost();
    const [tagGroup, setTagGroup] = useState<string[]>();
    const [tag, setTag] = useState<string>(slectedTag);

    const handleSelectTag = (tag: string) => {
        setTag(tag);
    };

    useEffect(() => {
        const tagArray: string[] = [];

        postList?.map((p) => {
            p.tags.map((t) => {
                tagArray.push(t);
            })
        });

        tagArray.unshift('All posts');

        setTagGroup(tagArray.filter((v, i) => tagArray.indexOf(v) === i));

    }, [postList]);

    return (
        <>
            {
                tagGroup
                    ?
                    <AnimatePresence>
                        <motion.div
                            key="tag-group"
                            variants={fadeVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={fadeTransitionSettings}
                            className="tag-group w-[90%] mb-16 flex flex-col justify-center items-center"
                        >
                            <div className="slected-tag">{tag}</div>
                            <div className="tag-list max-w-[90%] flex flex-wrap gap-x-5 gap-y-3">
                                {
                                    tagGroup?.map((t) => {
                                        return (
                                            <Link
                                                href={'#'}
                                                className={`tag-link ${tag === t ? 'font-semibold' : ''}`}
                                                key={t}
                                                onClick={() => handleSelectTag(t)}
                                            >
                                                <div className="flex">
                                                    <p className="hover:underline">{t}</p>
                                                    <p className="leading-3 text-xs">(1)</p>
                                                </div>
                                            </Link>
                                        );
                                    })
                                }
                            </div>
                        </motion.div>
                    </AnimatePresence>
                    :
                    <Skeleton className="tag-group w-[90%] mb-14 h-14 rounded-xl" />
            }
        </>
    );
};

export default TagGroup;