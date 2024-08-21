"use client";
import React from "react";
import "./Pagination.css";
import { Dispatch, SetStateAction } from "react";

interface PaginationProps {
  currentPage?: number;
  totalItems?: number;
  limit?: number;
  setCurrentPage?: Dispatch<SetStateAction<number>>;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage = 1,
  totalItems = 0,
  limit = 10,
  setCurrentPage,
}) => {
  const numberOfPages = Math.ceil(totalItems / limit) || 0;

  const handleItemsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedPage = parseInt(e.target.value);

    if (setCurrentPage) {
      if (selectedPage <= numberOfPages && selectedPage >= 0) {
        setCurrentPage(selectedPage);
      } else {
        setCurrentPage(numberOfPages);
      }
    }
  };

  const handlePrevPage = () => {
    if (setCurrentPage && currentPage && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (setCurrentPage && currentPage && currentPage < numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center bg-solidWhite shadow-md rounded-md p-2">
      <p className="mt-2">
        Total: <span>{totalItems}</span>
      </p>

      <div className="pagination flex flex-wrap items-center mt-2">
        <button
          onClick={handlePrevPage}
          className="py-1 px-2 m-1 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Prev
        </button>
        {numberOfPages &&
          Array.from({ length: numberOfPages }).map((_, index) => {
            const page = index + 1;
            if (
              page === 1 ||
              page === numberOfPages ||
              page === currentPage ||
              (page >= currentPage - 2 && page <= currentPage + 2) ||
              (currentPage >= 5 && page === 2) ||
              (currentPage <= numberOfPages - 4 && page === numberOfPages - 1)
            ) {
              return (
                <button
                  className={`py-1 px-2 m-1 rounded-md ${
                    currentPage === page
                      ? "!bg-lightBlue text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setCurrentPage && setCurrentPage(page)}
                  key={page}
                >
                  {page}
                </button>
              );
            } else if (
              (page === currentPage - 3 && currentPage > 4) ||
              (page === currentPage + 3 && currentPage < numberOfPages - 3)
            ) {
              return (
                <button
                  key={page}
                  disabled
                  className="py-1 px-2 m-1 rounded-md bg-gray-200"
                >
                  ...
                </button>
              );
            }
            return null;
          })}
        <button
          onClick={handleNextPage}
          className="py-1 px-2 m-1 rounded-md bg-gray-200 hover:bg-gray-300"
        >
          Next
        </button>
        {/* Select dropdown for page selection */}
        <input
          type="number"
          defaultValue={currentPage}
          onChange={handleItemsPerPage}
          name="changePage"
          className="w-14 py-1 border rounded-md text-center ml-4 border-grayForBorder"
          min="1"
          max={numberOfPages}
        />
      </div>
    </div>
  );
};

export default Pagination;
