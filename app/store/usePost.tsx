import { create } from "zustand";
import { Post } from "@/type/Post";

interface usePostInterface {
    totalPages: number | null;
    setTotalPages: (cnt: number) => void;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const usePost = create<usePostInterface>((set) => ({
    totalPages: null,
    setTotalPages: (cnt: number) => set({ totalPages: cnt }),
    currentPage: 1,
    setCurrentPage: (page: number) => set({ currentPage: page }),
}));

export default usePost;
