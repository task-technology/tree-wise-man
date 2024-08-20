"use client";
import { useState } from "react";
import Button from "@components/Button";
import { useRouter } from "next/navigation";
import { getUserInfo } from "../../../shared/auth/auth.service";
import { authKey } from "@config/constants";
import { getFromCookie } from "../../../shared/helpers/local_storage";
import { useGetSingleUserQuery } from "../../../redux/features/api/users";

const SearchBar = ({ placeholder = "Search...", showNotice = false }) => {
  const user: { id: string } | any = getUserInfo();
  const token = getFromCookie(authKey);
  const { data } = useGetSingleUserQuery({ token, id: user?.id });
  const router: any = useRouter();
  const [activeRoute, setActiveRoute] = useState("");

  const setQuery = (paramName: string, paramValue: string) => {
    const queryParams = new URLSearchParams(window.location.search);
    if (paramValue === "") {
      queryParams.delete(paramName);
      queryParams.delete("searchTerm");
    } else {
      queryParams.set(paramName, paramValue);
    }
    router.push(`?${queryParams.toString()}`);
  };

  const handleFilter = (route: string) => {
    setQuery("searchTerm", route);
    setActiveRoute(route);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center bg-white rounded-lg overflow-hidden shadow-md space-x-2 w-full md:w-1/2 lg:w-1/3">
        <input
          type="text"
          onChange={(e) => setActiveRoute(e.target.value)}
          className="flex-grow px-4 py-3 focus:outline-none text-base sm:text-sm"
          placeholder={placeholder}
        />

        <Button
          type="submit"
          className="bg-blue-600 text-white  !py-3  rounded-none"
          onClick={() => handleFilter(activeRoute)}
        >
          Search
        </Button>
      </div>
      {!data?.data?.subscription && showNotice && (
        <div className="w-full md:w-1/2 lg:w-1/3 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded-md shadow-lg">
          <p className="text-sm">
            <strong>Notice:</strong> Please complete your payment to add your
            company to our website and attract more clients.
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
