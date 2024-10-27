import React from 'react';
import '../style/Pagination.css'; // Import the custom CSS for styling

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = [...Array(totalPages).keys()].map(x => x + 1);

    // Determine the start and end page for the visible pages
    const maxVisiblePages = 6;
    let startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    let endPage = startPage + maxVisiblePages - 1;

    // Adjust start and end page if they exceed the total pages
    if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(endPage - maxVisiblePages + 1, 1);
    }

    return (
        <nav>
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                        Previous
                    </button>
                </li>
                {pages.slice(startPage - 1, endPage).map((page) => (
                    <li key={page} className={`page-item ${page === currentPage ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => onPageChange(page)}>
                            {page}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                    <button className="page-link" onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
