import Button from "@components/Button";
import Link from "next/link";
import React from "react";

const SuccessPage = () => {
  return (
    <div className=" min-h-screen flex flex-col space-y-5 justify-center items-center">
      
        <p className=" text-center text-3xl">Payment success</p>
        <Link href="/login">
          <Button>Go to Dashboard</Button>
        </Link>
      
    </div>
  );
};

export default SuccessPage;
