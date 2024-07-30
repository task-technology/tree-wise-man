"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "@components/Button";

const SimpleSearchComponent = ({ placeholder = "Search..." }) => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      router.push(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="w-full max-w-md mx-auto">
      <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md">
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className="flex-grow px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder={placeholder}
        />
        <Button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-none"
        >
          Search
        </Button>
      </div>
    </form>
  );
};

export default SimpleSearchComponent;
