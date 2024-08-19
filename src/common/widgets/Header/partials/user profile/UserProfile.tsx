import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button";
import { isLoggedIn } from "../../../../../shared/auth/auth.service";
import { handleLogout } from "../../../../../shared/helpers/handleLogout";
import { useRouter } from "next/navigation";

const UserProfile = () => {
  const [isLogged, setIsLogged] = useState(false);
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
            className="btn btn-ghost btn-circle avatar"
          >
            <div>
              <Image
                className="rounded-full"
                fill
                style={{ objectFit: "cover" }}
                alt="Tailwind CSS Navbar component"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className=" menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/dashboard/profile/my-profile">Profile</Link>
            </li>
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
