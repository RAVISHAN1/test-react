import React from 'react'

function ShopPagination({ currentPage, totalPages, onPageChange }) {
    return (
        <div className="pagination__option">
            {/* Previous Arrow */}
            <a
                href="#"
                className={currentPage === 1 ? "disabled" : ""}
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) onPageChange(currentPage - 1);
                }}
            >
                &lt;
            </a>

            {/* Pagination Numbers */}
            {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;

                // Show first two, last two, and two around the current page
                if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 2 && page <= currentPage + 2)
                ) {
                    return (
                        <a
                            key={index}
                            href="#"
                            className={currentPage === page ? "active" : ""}
                            onClick={(e) => {
                                e.preventDefault();
                                onPageChange(page);
                            }}
                        >
                            {page}
                        </a>
                    );
                }

                // Add ellipsis
                if (
                    (page === currentPage - 3 && page !== 1) ||
                    (page === currentPage + 3 && page !== totalPages)
                ) {
                    return (
                        <span key={index} className="ellipsis">
                            ...
                        </span>
                    );
                }

                return null; // Skip pages outside the range
            })}

            {/* Next Arrow */}
            <a
                href="#"
                className={currentPage === totalPages ? "disabled" : ""}
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages) onPageChange(currentPage + 1);
                }}
            >
                &gt;
            </a>
        </div>
    );
}

export default ShopPagination
