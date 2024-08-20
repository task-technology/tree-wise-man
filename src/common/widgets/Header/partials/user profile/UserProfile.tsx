import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button";
import {
  getUserInfo,
  isLoggedIn,
} from "../../../../../shared/auth/auth.service";
import { handleLogout } from "../../../../../shared/helpers/handleLogout";
import { useRouter } from "next/navigation";
import { getFromCookie } from "../../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import { useGetSingleUserQuery } from "../../../../../redux/features/api/users";
import { icons } from "@libs/Icons";

const UserProfile = () => {
  const token = getFromCookie(authKey);

  const [isLogged, setIsLogged] = useState(false);
  const user: any = getUserInfo();
  const { data: singleData, isLoading: singleDataLoading } =
    useGetSingleUserQuery({ token, id: user?.id });
  console.log(singleData);
  const router = useRouter();

  useEffect(() => {
    const isLog: any = isLoggedIn();
    setIsLogged(isLog);
  }, []);
  return (
    <>
      {isLogged ? (
        <div className="dropdown lg:dropdown-end sm:dropdown-start">
          <div
            tabIndex={0}
            role="button"
            className={`btn btn-ghost btn-circle avatar ${
              !singleData?.data?.profileImage && "border border-grayForBorder"
            }`}
          >
            <div>
              {singleData?.data?.profileImage ? (
                <Image
                  className="rounded-full"
                  fill
                  style={{ objectFit: "cover" }}
                  alt="Tailwind CSS Navbar component"
                  src={singleData?.data?.profileImage}
                />
              ) : (
                <span className="rounded-full text-2xl ">{icons?.user}</span>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/dashboard/home">Dashboard</Link>
            </li>
            <li>
              <span onClick={() => handleLogout(router)}>Logout</span>
            </li>
          </ul>
        </div>
      ) : (
        <Link href="/login">
          <Button secondary className="!text-solidBlack !rounded-full">
            List Your Tree Service
          </Button>
        </Link>
      )}
    </>
  );
};

export default UserProfile;
