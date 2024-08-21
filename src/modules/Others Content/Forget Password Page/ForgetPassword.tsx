"use client";

import { useEffect, useState } from "react";
import { useForgetPasswordMutation } from "../../../redux/features/api/others";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "@components/Section Title/SectionTitle";
import { handleForgetPassword } from "./helpers/handleForgetPassword";
import Button from "@components/Button";
import Link from "next/link";
import InputWithValue from "@components/Input With Value";

const ForgotPassword = () => {
  const [forgetPassword, { isLoading: forgotPasswordLoading }] =
    useForgetPasswordMutation();
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvpnbsehd/image/upload/v1724227680/heber-davis-5vKQOaAL3IQ-unsplash_kuolww.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div
        data-aos="fade-up"
        className="relative z-10 p-8 rounded-lg shadow-lg w-full max-w-md overflow-y-hidden"
      >
        <div className="py-2">
          <SectionTitle className="text-solidWhite" title="Forgot Password" />
        </div>
        <form
          onSubmit={(e) => handleForgetPassword(e, email, forgetPassword)}
          className="space-y-6"
        >
          <div>
            <InputWithValue
              labelName="Email"
              labelClassName="text-solidWhite"
              inputType="email"
              inputName="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
              className="bg-transparent text-solidWhite"
            />
          </div>
          <div className="w-full">
            <Button
              loading={forgotPasswordLoading}
              primary
              type="submit"
              className="w-full"
            >
              Reset Password
            </Button>
          </div>
        </form>
        <p className="mt-6 text-center text-grayForBorder">
          Remembered your password?{" "}
          <Link href="/login">
            <span className="text-blue-400 hover:text-indigo-500">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
