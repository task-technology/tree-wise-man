"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "@components/Section Title/SectionTitle";
import InputWithValue from "@components/Input With Value";
import Button from "@components/Button";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

import { handleRegister } from "./helpers/handleRegister";
import { useRouter } from "next/navigation";
import { useRegisterMutation } from "../../../redux/features/api/others";

const Register = () => {
  const router = useRouter();
  const [createUser, { isLoading: userCreateLoading }] = useRegisterMutation();
  const [loading, setLoading] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [designation, setDesignation] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="my-28  p-8 rounded-lg  w-full max-w-3xl  shadow-lg mx-auto ">
      <div className=" relative overflow-hidden">
        {/* <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dvpnbsehd/image/upload/v1724227680/heber-davis-5vKQOaAL3IQ-unsplash_kuolww.jpg')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70"></div> */}
        <div data-aos="fade-up" className="relative z-10 ">
          <div className="pb-5">
            <SectionTitle title="Register" />
          </div>
          <form
            onSubmit={(e: any) =>
              handleRegister(
                e,
                name,
                email,
                company,
                contactNo,
                file,
                designation,
                createUser,
                router,
                setLoading,
                password
              )
            }
            className="space-y-6"
          >
            <div className="grid grid-cols-2 gap-5">
              <div>
                <InputWithValue
                  labelName="Name"
                  inputType="text"
                  inputName="name"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <InputWithValue
                  labelName="Email"
                  inputType="email"
                  inputName="email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <InputWithValue
                  labelName="Company"
                  inputType="text"
                  inputName="company"
                  value={company}
                  onChange={(e: any) => setCompany(e.target.value)}
                  required
                />
              </div>
              <div>
                <InputWithValue
                  labelName="Contact Number"
                  inputType="text"
                  inputName="contactNo"
                  value={contactNo}
                  onChange={(e: any) => setContactNo(e.target.value)}
                  required
                />
              </div>

              <div>
                <InputWithValue
                  labelName="Job Title"
                  inputType="text"
                  inputName="designation"
                  value={designation}
                  onChange={(e: any) => setDesignation(e.target.value)}
                  required
                />
              </div>

              <div>
                <InputWithValue
                  labelName="Password"
                  inputType="text"
                  inputName="password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="md:col-span-2">
                <PhotoUpload
                  label="Upload Your Logo/Photo"
                  file={file}
                  setFile={setFile}
                />
              </div>
            </div>
            <h4 className="relative px-4 md:px-0 pb-5 text-[10px] md:text-sm italic font-semibold text-center text-gray-800 ">
              <span className="absolute top-0 left-0 text-2xl  md:text-5xl text-gray-300 dark:text-gray-600">
                “
              </span>
              The fruits of the righteous is a tree of life, and the one who is
              wise saves lives
              <span className="block mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                — Proverbs 11:30 (NIV)
              </span>
              <span className="absolute bottom-0 right-0 text-2xl  md:text-5xl text-gray-300 dark:text-gray-600">
                ”
              </span>
            </h4>
            <div className="w-full">
              <Button
                loading={loading || userCreateLoading}
                primary
                type="submit"
                className="w-full"
              >
                Register
              </Button>
            </div>
          </form>
          <p className="mt-6 text-center ">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-blue-400 hover:text-indigo-500">Login</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
