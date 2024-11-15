'use client';

import Image from "next/image";
import Link from "next/link";
import Tags from "./Tags";
import PostDescription from "./PostDescription";
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
        const queryParam = tagParam ? `?tag=${tagParam as string}` : '';
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
    }, []);

    return (
        <>
            {
                pagePosts.length > 0
                    ?
                    <AnimatePresence>
                        <motion.div
                            key="post-list"
                            variants={fadeVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={fadeTransitionSettings}
                            className="w-[90%] grid gap-9 mb-6 mlg:w-full mlg:grid-cols-2"
                        >
                            {!tagParam &&
                                pagePosts.map((post) => {
                                    return (
                                        <Link href={`/posts/${post.slug}`} key={post.slug} className="h-[450px] group">
                                            <div className="h-[70%] relative">
                                                <Image alt="post_img" src={post.thumbnail} fill className="rounded-2xl" />
                                                <PostDescription tags={post.tags} description={post.description} />
                                            </div>
                                            <div className="line-clamp-1 flex items-center mt-3">
                                                <Tags tags={undefined} date={post.date} />
                                            </div>
                                            <h2 className="text-3xl line-clamp-2 mt-3 break-all">{post.title}</h2>
                                        </Link>
                                    );
                                })
                            }
                            {tagParam &&
                                pagePosts.filter((p) => p.tags.includes(decodeURIComponent(tagParam as string))).map((post) => {
                                    return (
                                        <Link href={`/posts/${post.slug}`} key={post.slug} className="h-[450px] group">
                                            <div className="h-[70%] relative">
                                                <Image alt="post_img" src={post.thumbnail} fill className="rounded-2xl" />
                                                <PostDescription tags={post.tags} description={post.description} />
                                            </div>
                                            <div className="line-clamp-1 flex items-center mt-3">
                                                <Tags tags={undefined} date={post.date} />
                                            </div>
                                            <h2 className="text-3xl line-clamp-2 mt-3 break-all">{post.title}</h2>
                                        </Link>
                                    );
                                })
                            }
                        </motion.div>
                    </AnimatePresence>
                    :
                    <div className="w-[90%] grid gap-9 mb-6 mlg:w-full mlg:grid-cols-2">
                        {Array.from({ length: pagePerPost }, (_, index) => {
                            return (
                                <div key={index} className="h-[450px]">
                                    <Skeleton className="h-[70%] rounded-2xl" />
                                    <Skeleton className="h-11 w-36 mt-3 rounded-full" />
                                    <Skeleton className="h-11 mt-3 rounded-2xl" />
                                </div>
                            );
                        })}
                    </div>
            }
        </>
    );
};

export default PostList;