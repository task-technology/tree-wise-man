"use client";
import React, { useState } from "react";
import { home_data } from "../config/constants";
import { icons } from "@libs/Icons";
import Button from "@components/Button";
import styles from "../style/hero.module.css";
import { cx } from "@config/constants";
import { useRouter } from "next/navigation";

const Search = () => {
  const { search } = home_data;
  const router = useRouter();

  const [formData, setFormData] = useState({
    searchText: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/services?searchTerm=${formData?.searchText}`);
  };

  return (
    <section className="w-full min-h-[50vh] flex items-center justify-center">
      <div className="bg-primary/30 max-w-6xl w-full lg:grid grid-cols-[2fr,1fr] flex flex-col space-y-6 lg:space-y-0 items-center px-4 lg:px-20 py-8 lg:py-20 mx-2">
        <div className="text-center lg:text-left">
          <h1 className="text-2x text-xl  md:text-[2.5rem] font-bold !leading-relaxed ">
            <span className="block">{search.first_title}</span>
            <span>{search.sec_title}</span>
            <span className="ml-1.5 bg-solidRed px-2 md:px-4 py-1 uppercase rounded-tl-lg md:rounded-tl-2xl rounded-br-lg md:rounded-br-2xl text-solidWhite">
              {search.description}
            </span>
          </h1>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex  w-full  flex-row h-14 lg:h-20 justify-start items-center space-y-4 lg:space-y-0 lg:space-x-4 rounded-lg bg-solidWhite p-4 lg:p-2"
        >
          <input
            type="text"
            required
            name="searchText"
            value={formData.searchText}
            onChange={handleChange}
            className="text-black w-full text-base md:text-xl px-4 py-2 focus:outline-none"
            placeholder={search.button.label}
          />
          <Button
            type="submit"
            className={cx(
              "rounded-full !px-3 bg-secondary/80 uppercase shadow-md text-lg !mt-0",
              styles.buttonRound
            )}
          >
            {icons.search}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Search;
