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
    <form onSubmit={(e) => handleSearch(e, query)} className="w-full">
      <div className="flex items-center  bg-white rounded-lg overflow-hidden shadow-md">
        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e, setQuery)}
          className="flex-grow px-4 py-3  focus:outline-none "
          placeholder={placeholder}
        />
        {query && (
          <button
            type="button"
            onClick={() => clearSearch(setQuery)}
            className=" text-gray text-3xl px-4"
          >
            &times;
          </button>
        )}
        <Button
          type="submit"
          className="bg-blue-600 text-white px-6 !py-3 rounded-none"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;
