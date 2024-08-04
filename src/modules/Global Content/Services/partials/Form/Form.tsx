"use client";
import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Form = () => {
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsDropdownOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "zipCode") {
      setZipCode(value);
    } else if (name === "state") {
      setState(value);
    }
  };

  const clearInput = (name: string) => {
    if (name === "zipCode") {
      setZipCode("");
    } else if (name === "state") {
      setState("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative flex flex-col md:flex-row items-center w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden p-2 md:p-6 space-y-4 md:space-y-0 md:space-x-4 "
    >
      {/* Mobile Dropdown */}
      <div className="md:hidden flex flex-col w-full">
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full bg-primary text-white px-4 py-3 rounded-lg flex items-center justify-between shadow-md hover:shadow-lg transition-shadow"
        >
          <span className="font-semibold">Search Options</span>
          <AiOutlineSearch
            className={`h-5 w-5 transform ${
              isDropdownOpen ? "rotate-180" : "rotate-0"
            } transition-transform`}
          />
        </button>
        {isDropdownOpen && (
          <div className="mt-2 w-full bg-white ">
            <div className="p-2">
              <div className="relative">
                <input
                  type="text"
                  name="zipCode"
                  value={zipCode}
                  onChange={handleChange}
                  placeholder="Enter Zip Code"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary pr-10"
                />
                {zipCode && (
                  <button
                    type="button"
                    onClick={() => clearInput("zipCode")}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                  >
                    <AiOutlineClose className="h-5 w-5" />
                  </button>
                )}
              </div>
              <div className="relative mt-4">
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={handleChange}
                  placeholder="Enter State"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary pr-10"
                />
                {state && (
                  <button
                    type="button"
                    onClick={() => clearInput("state")}
                    className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                  >
                    <AiOutlineClose className="h-5 w-5" />
                  </button>
                )}
              </div>
              <button
                type="submit"
                className="w-full px-6 py-2 bg-primary text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary mt-4"
              >
                <AiOutlineSearch className="h-5 w-5" />
                <span className="font-medium">Search</span>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Form */}
      <div className="hidden md:flex flex-1 w-full">
        <div className="relative flex-1 mr-2">
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={handleChange}
            placeholder="Enter Zip Code"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary pr-10"
          />
          {zipCode && (
            <button
              type="button"
              onClick={() => clearInput("zipCode")}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
            >
              <AiOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="relative flex-1 mr-2">
          <input
            type="text"
            name="state"
            value={state}
            onChange={handleChange}
            placeholder="Enter State"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary pr-10"
          />
          {state && (
            <button
              type="button"
              onClick={() => clearInput("state")}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
            >
              <AiOutlineClose className="h-5 w-5" />
            </button>
          )}
        </div>
        <button
          type="submit"
          className="px-6 py-3 bg-primary text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <AiOutlineSearch className="h-5 w-5" />
          <span className="font-medium">Search</span>
        </button>
      </div>
    </form>
  );
};

export default Form;
