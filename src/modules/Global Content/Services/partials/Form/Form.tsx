"use client";

import Input from "@components/Input";
import InputWithValue from "@components/Input With Value";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Form = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchTerm) {
      // Clear the search term from the URL if empty
      router.push(window.location.pathname);
    } else {
      // Update the search term in the URL
      const queryParams = new URLSearchParams(window.location.search);
      queryParams.set("searchTerm", searchTerm);
      router.push(`?${queryParams.toString()}`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const clearInput = () => {
    setSearchTerm("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-3xl bg-white  rounded-lg shadow-md overflow-hidden p-2 md:p-4 !mt-0 mb-5"
    >
      <div className="relative flex-1">
        <InputWithValue
          inputType="text"
          value={searchTerm}
          onChange={handleChange}
          inputPlaceholder="Search by state or zip code"
          className="w-full px-2 md:px-4 py-2 md:py-2 border border-grayForBorder  !rounded-lg  !text-sm md:text-base "
        />
        {searchTerm && (
          <button
            type="button"
            onClick={clearInput}
            className="absolute inset-y-0 right-0 flex items-center px-3  hover:text-gray-700 "
          >
            <AiOutlineClose className="h-3 w-3 md:h-5 md:w-5" />
          </button>
        )}
      </div>
      <button
        type="submit"
        className="ml-4 px-2 md:px-4 py-1 md:py-2 bg-primary text-sm md:text-base text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-dark "
      >
        <AiOutlineSearch className="h-4 w-4 md:h-5 md:w-5" />
        <span className="font-medium">Search</span>
      </button>
    </form>
  );
};

export default Form;
