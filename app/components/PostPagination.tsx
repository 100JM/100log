'use client';

import { useState } from "react";

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

const PostPagination: React.FC = () => {
    const totalPages = 10;
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // 페이지 변경 시 데이터를 가져오는 로직 추가
    };

    const getPageRange = () => {
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, startPage + 4);

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    const pageRange = getPageRange();

    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" onClick={() => handlePageChange(Math.max(1, currentPage - 1))} />
                </PaginationItem>
                {pageRange.map((page) => (
                    <PaginationItem key={page}>
                        <PaginationLink
                            href="#"
                            isActive={currentPage === page}
                            onClick={() => handlePageChange(page)}
                            className="page-link"
                        >
                            {page}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                {!(currentPage >= (totalPages -2)) &&
                    <PaginationItem>
                        <PaginationEllipsis />
                    </PaginationItem>
                }
                <PaginationItem>
                    <PaginationNext href="#" onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
};

export default PostPagination;