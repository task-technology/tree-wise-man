"use client";
import { useState, useEffect } from "react";
import Button from "@components/Button";
import {
  clearSearch,
  handleInputChange,
  handleSearch,
} from "./helpers/SearchFunction";

const SearchBar = ({ placeholder = "Search..." }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const currentQuery = urlParams.get("searchTerm") || "";
    setQuery(currentQuery);
  }, []);

  return (
    <form
      onSubmit={(e) => handleSearch(e, query)}
      className="w-full mt-2 md:mt-0"
    >
      <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md space-x-2">
        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e, setQuery)}
          className="flex-grow px-4 py-3 focus:outline-none text-base sm:text-sm"
          placeholder={placeholder}
        />
        {query && (
          <button
            type="button"
            onClick={() => clearSearch(setQuery)}
            className="text-gray-600 text-2xl px-4 sm:px-2"
          >
            &times;
          </button>
        )}
        <Button
          type="submit"
          className="bg-blue-600 text-white  !py-3  rounded-none"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
