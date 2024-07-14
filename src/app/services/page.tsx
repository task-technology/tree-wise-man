"use client";
import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Card from "@components/Card";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const SearchByZip = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]); // Mock search results

  // Function to handle search based on query parameter on initial load
  const handleInitialSearch = () => {
    const searchTerm = searchParams.get("searchTerm") || "";
    const stateParam = searchParams.get("state") || "";
    if (searchTerm) {
      setZipCode(searchTerm);
      setState(stateParam || "");
      // Perform search based on searchTerm and stateParam
      handleSearch(searchTerm, stateParam);
    }
  };

  // Use useEffect to handle initial search when searchTerm is present in URL
  useEffect(() => {
    handleInitialSearch();
  }, []);

  const handleSearch = (zip: string, st?: string) => {
    // Mock data for demonstration
    const mockResults = [
      {
        id: 1,
        name: "Example Business 1",
        address: "123 Main St",
        city: "Example City",
        state: "EX",
        zip: "12345",
        logo: "/logo.png", // Example logo
      },
      {
        id: 2,
        name: "Example Business 2",
        address: "456 Elm St",
        city: "Another City",
        state: "AN",
        zip: "67890",
        logo: "/logo.png", // Example logo
      },
      // Add more mock results as needed
    ];

    setSearchResults(mockResults);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "zipCode") {
      if (value === "") {
      }
      {
        setZipCode(value);
      }
    } else if (name === "state") {
      if (value === "") {
      }
      {
        setState(value);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(zipCode, state);
    // Construct query parameters with both zipCode and state
    const queryParams = `?searchTerm=${zipCode}&state=${state}`;
    router.push(queryParams);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex mt-20 justify-center">
      <div className="max-w-6xl w-full flex flex-col items-center space-y-8 px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">
          Find Services by Zip Code and State
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex items-center w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden"
        >
          <input
            type="text"
            name="zipCode"
            value={zipCode}
            onChange={handleChange}
            placeholder="Enter Zip Code"
            className="px-4 py-3 w-full border-y border-l border-gray-300 rounded-l-lg focus:outline-none focus:border-primary"
          />
          <input
            type="text"
            name="state"
            value={state}
            onChange={handleChange}
            placeholder="Enter State"
            className="px-4 py-3 w-full border-y border-l border-gray-300 focus:outline-none focus:border-primary"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-white rounded-r-lg flex items-center space-x-2 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transform hover:scale-105 transition duration-300"
          >
            <AiOutlineSearch className="h-5 w-5" />
            <span>Search</span>
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {searchResults.map((result, index) => (
            <Card
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <Image
                    height={20}
                    width={20}
                    src={result.logo}
                    alt="Company Logo"
                    className="mr-4 rounded-full"
                  />
                  <h3 className="text-xl font-semibold">{result.name}</h3>
                </div>
                <p className="text-gray-600">{result.address}</p>
                <p className="text-gray-600">
                  {result.city}, {result.state} {result.zip}
                </p>
                <button className="px-3 mt-2 bg-primary text-white rounded-lg flex items-center space-x-2 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary transform hover:scale-105 transition duration-300">
                  Contact us
                </button>
                {/* Add more details as needed */}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchByZip;
