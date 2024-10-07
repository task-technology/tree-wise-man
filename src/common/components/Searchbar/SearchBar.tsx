"use client";
import { useState } from "react";
import Button from "@components/Button";
import { useRouter } from "next/navigation";
import { getUserInfo } from "../../../shared/auth/auth.service";
import { authKey } from "@config/constants";
import { getFromCookie } from "../../../shared/helpers/local_storage";
import { useGetSingleUserQuery } from "../../../redux/features/api/users";
import Link from "next/link";

const SearchBar = ({ placeholder = "Search...", showNotice = false }) => {
  const user: { id: string } | any = getUserInfo();
  const token = getFromCookie(authKey);
  const { data, isLoading } = useGetSingleUserQuery({ token, id: user?.id });
  const router: any = useRouter();
  const [activeRoute, setActiveRoute] = useState("");

  // Function to set or clear the search query parameter
  const setQuery = (paramName: string, paramValue: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    if (paramValue === "") {
      queryParams.delete(paramName);
    } else {
      queryParams.set(paramName, paramValue);
    }
    router.push(`?${queryParams.toString()}`);
  };

  const handleFilter = (route: string) => {
    setQuery("searchTerm", route);
  };

  const handleClear = () => {
    setActiveRoute("");
    setQuery("searchTerm", "");
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md space-x-2 w-full md:w-1/2 lg:w-1/3">
        <input
          type="text"
          value={activeRoute}
          onChange={(e) => setActiveRoute(e.target.value)} // Update state on input change
          className="flex-grow px-4 py-3 focus:outline-none text-base sm:text-sm"
          placeholder={placeholder}
        />

        {activeRoute && (
          <button
            className="text-gray-500 hover:text-gray-700 px-2"
            onClick={handleClear}
          >
            ✕
          </button>
        )}

        <Button
          type="submit"
          className="bg-blue-600 text-white  !py-3  rounded-none"
          onClick={() => handleFilter(activeRoute)}
        >
          Search
        </Button>
      </div>

      {!isLoading &&
        !data?.data?.subscription &&
        showNotice &&
        user?.role !== "admin" && (
          <Link
            href={"/dashboard/payment/first-payment"}
            className="w-full md:w-1/2 lg:w-1/3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md shadow-lg"
          >
            <p className="text-sm">
              <strong>Notice:</strong> Please complete your payment to add your
              company to our website and attract more clients.
            </p>
          </Link>
        )}
    </div>
  );
};

export default SearchBar;
