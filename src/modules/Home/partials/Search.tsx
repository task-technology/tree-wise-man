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
    <div className="w-full min-h-[50vh] flex items-center justify-center">
      <div className="bg-primary/30 max-w-6xl w-full lg:grid grid-cols-[2fr,1fr] flex flex-col space-y-9 items-center px-4 lg:px-20 py-20 mx-2">
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] font-bold !leading-relaxed">
            <span className="block">{search.first_title}</span>
            <span className="">{search.sec_title}</span>
            <span className="ml-1.5 bg-red-700 px-4 py-1.5 uppercase rounded-tl-2xl rounded-br-2xl text-white">
              {search.description}
            </span>
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex h-11 lg:h-20 justify-center items-center rounded-lg bg-white p-2"
        >
          <input
            type="text"
            required
            name="searchText"
            value={formData.searchText}
            onChange={handleChange}
            className="text-black w-full min-h-[50px] lg:min-h-[50px] text-xl px-4 py-2 focus:outline-none"
            placeholder={search.button.label}
          />
          <Button
            type="submit"
            className={cx(
              "rounded-full !px-3 bg-secondary/80 uppercase shadow-md text-lg min-h-[50px] lg:min-h-[40px]",
              styles.buttonRound
            )}
          >
            {icons.search}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Search;
