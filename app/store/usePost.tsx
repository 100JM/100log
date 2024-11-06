import { create } from "zustand";
import { Post } from "@/type/Post";

interface usePostInterface {
    totalPages: number | null;
    setTotalPages: (cnt: number) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    postList: Post[];
    setPostList: (posts: Post[]) => void;
    slectedTag: string;
    setSelectedTag: (tag: string) => void;
}

const usePost = create<usePostInterface>((set) => ({
    totalPages: null,
    setTotalPages: (cnt: number) => set({ totalPages: cnt }),
    currentPage: 1,
    setCurrentPage: (page: number) => set({ currentPage: page }),
    postList: [],
    setPostList: (posts: Post[]) => set({ postList: posts }),
    slectedTag: 'All posts',
    setSelectedTag: (tag: string) => set({ slectedTag: tag }),
}));

export default usePost;
