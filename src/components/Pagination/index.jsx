import React from "react";
import Link from "next/link";

const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);

  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  console.log(pages);
  return (
    <setion className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        <ul className="flex">
          {pages.map((page) => (
            <li key={page}>
              <a onClick={() => onPageChange(page)}>{page}</a>
            </li>
          ))}
        </ul>
        {/* {!prevPage && (
          <button
            rel="previous"
            className="cursor-auto disabled:opacity-50"
            disabled={!prevPage}
          >
            Previous
          </button>
        )}
        {prevPage && (
          <Link
            href={
              currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`
            }
          >
            <button rel="previous">Previous</button>
          </Link>
        )}
        <span>
          {currentPage} of {totalPages}
        </span>
        {!nextPage && (
          <button
            rel="next"
            className="cursor-auto disabled:opacity-50"
            disabled={!nextPage}
          >
            Next
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button rel="next">Next</button>
          </Link>
        )} */}
      </nav>
    </setion>
  );
};

export default Pagination;
