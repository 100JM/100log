'use client';

import Image from "next/image";
import Link from "next/link";
import Tags from "./Tags";
import { Post } from "@/type/Post";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import usePost from "../store/usePost";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimatePresence, motion } from 'framer-motion';
import { fadeTransitionSettings, fadeVariants } from "../utils/framer";

const PostList: React.FC = () => {
    const { setTotalPages, currentPage, setCurrentPage } = usePost();
    const [pagePosts, setPagePosts] = useState<Post[]>([]);

    const pagePerPost = 4;

    const params = useParams();
    const tagParam = params.tag;

    const fetchGetAllPosts = async () => {
        const queryParam = tagParam ? `?tag=${encodeURIComponent(tagParam as string)}` : '';
        const response = await fetch(`/api/post-list-api${queryParam}`);

        try {
            if (response.ok) {
                const posts = await response.json();

                const currentPagePosts = posts.slice(((currentPage - 1) * pagePerPost), currentPage * pagePerPost);

                setPagePosts(currentPagePosts);                
                setTotalPages(Math.ceil(posts.length / pagePerPost));
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {                                                                                                                                    
        fetchGetAllPosts();
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [])

    return (
        <>
            {
                pagePosts.length !== 0
                    ?
                    <AnimatePresence>
                        <motion.div
                            key="post-list"
                            variants={fadeVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={fadeTransitionSettings}
                            className="w-[90%] grid gap-6 gap-y-10 mb-6 post-list"
                        >
                            {!tagParam &&
                                pagePosts.map((post) => {
                                    return (
                                        <Link href={`/posts/${post.slug}`} key={post.slug} className="h-[450px]">
                                            <div className="h-2/3 relative">
                                                <Image alt="post_img" src={post.thumbnail} fill className="rounded-2xl" />
                                            </div>
                                            <div className="h-1/3 mt-3">
                                                <div className="line-clamp-1 flex items-center">
                                                    <Tags tags={undefined} date={post.date} />
                                                </div>
                                                <h2 className="text-3xl line-clamp-2 mt-3">{post.title}</h2>
                                            </div>
                                        </Link>
                                    );
                                })
                            }
                            {tagParam &&
                                pagePosts.filter((p) => p.tags.includes(tagParam as string)).map((post) => {
                                    return (
                                        <Link href={`/posts/${post.slug}`} key={post.slug} className="h-[450px]">
                                            <div className="h-2/3 relative">
                                                <Image alt="post_img" src={post.thumbnail} fill className="rounded-2xl" />
                                            </div>
                                            <div className="h-1/3 mt-3">
                                                <div className="line-clamp-1 flex items-center">
                                                    <Tags tags={undefined} date={post.date} />
                                                </div>
                                                <h2 className="text-3xl line-clamp-2 mt-3">{post.title}</h2>
                                            </div>
                                        </Link>
                                    );
                                })
                            }
                        </motion.div>
                    </AnimatePresence>
                    :
                    <div className="w-[90%] grid gap-6 gap-y-10 mb-6 post-list">
                        {Array.from({ length: pagePerPost }, (_, index) => {
                            return (
                                <div key={index} className="h-[450px]">
                                    <Skeleton className="h-2/3 rounded-2xl" />
                                    <div className="h-1/3 mt-3">
                                        <Skeleton className="h-11 w-36 rounded-full" />
                                        <Skeleton className="h-11 mt-3 rounded-2xl" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
            }
        </>
    );
};

export default PostList;