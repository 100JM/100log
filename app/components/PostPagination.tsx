'use client';

import usePost from "../store/usePost";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Skeleton } from "@/components/ui/skeleton"


const PostPagination: React.FC = () => {
    const { totalPages, currentPage, setCurrentPage } = usePost();

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const getPageRange = () => {
        if (totalPages) {
            const startPage = Math.max(1, currentPage - 2);
            const endPage = Math.min(totalPages, startPage + 4);
            
            return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
        }
    };

    const pageRange = getPageRange();

    return (
        <>
            {
                totalPages === null
                ?
                <Skeleton className="h-8 w-80 mt-3 mb-2" />
                :
                <Pagination className="mt-3">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious className="cursor-pointer" onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
                        </PaginationItem>
                        {pageRange?.map((page) => (
                            <PaginationItem key={page}>
                                <PaginationLink
                                    isActive={currentPage === page}
                                    onClick={() => handlePageChange(page)}
                                    className="page-link cursor-pointer"
                                >
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))}
                        {!(currentPage >= (totalPages -2)) && totalPages > 5 &&
                            <PaginationItem>
                                <PaginationEllipsis />
                            </PaginationItem>
                        }
                        <PaginationItem>
                            <PaginationNext className="cursor-pointer" onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            }
        </>
    );
};

export default PostPagination;