import React from "react";
import { isLoggedIn } from "../../../../../../shared/auth/auth.service";
import Image from "next/image";
import Link from "next/link";
import Button from "@components/Button";

const UserProfile = () => {
  const isLogged = isLoggedIn();
  return (
    <div className="lg:hidden">
      {isLogged ? (
        <div>
          <div className="avatar btn-circle">
            <Image
              className="rounded-full"
              fill
              style={{ objectFit: "cover" }}
              alt="Tailwind CSS Navbar component"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </div>
      ) : (
        <Link href="/login">
          <Button secondary className="!text-solidBlack !rounded-full">
            List Your Tree Service
          </Button>
        </Link>
      )}
    </div>
  );
};

export default UserProfile;
