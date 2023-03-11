import React from "react";
import Pagination from "src/components/Pagination";

const ListLayout = ({ children, pagination, initialDisplayListing }) => {
  return (
    <div className="grid w-full gap-8 lg:w-8/12 lg:grid-cols-3">
      {children}

      {pagination && pagination.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
        />
      )}
    </div>
  );
};

export default ListLayout;
