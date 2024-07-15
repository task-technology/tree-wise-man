"use client"

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Form = () => {
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
  );
};

export default Form;
