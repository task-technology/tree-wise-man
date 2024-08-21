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
import { useGetSingleAdminQuery } from "../../../../../redux/features/api/admin";

const UserProfile = () => {
  const router = useRouter();
  const token = getFromCookie(authKey);

  const [isLogged, setIsLogged] = useState(false);
  const user: any = getUserInfo();
  const { data: adminData } = useGetSingleAdminQuery({
    token,
    id: user?.id,
  });
  const { data: userData } = useGetSingleUserQuery({
    token,
    id: user?.id,
  });

  // Determine which data to use based on user's role
  const singleData = user?.role ? adminData : userData;

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
            <div className="relative h-10 ">
              {singleData?.data?.profileImage ? (
                <Image
                  className="rounded-full"
                  fill
                  sizes="(max-width: 768px) 40px, (max-width: 1024px) 50px, 64px" // Add sizes prop
                  style={{ objectFit: "cover" }}
                  alt={
                    singleData?.data?.name
                      ? singleData?.data?.name?.slice(0, 1)
                      : "Profile"
                  }
                  src={singleData?.data?.profileImage}
                />
              ) : (
                <span className="rounded-full text-xl md:text-2xl h-full w-full flex items-center justify-center">
                  {icons?.user}
                </span>
              )}
            </div>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/dashboard/profile/my-profile">
                {singleData?.data?.name}
              </Link>
            </li>
            <hr className="my-2" />
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
