"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import SectionTitle from "@components/Section Title/SectionTitle";
import InputWithValue from "@components/Input With Value";
import Button from "@components/Button";
import PhotoUpload from "@components/Photo Upload/PhotoUpload";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [designation, setDesignation] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const fullData = {
      name,
      email,
      company,
      profileImage,
      contactNo,
      designation,
    };
    console.log(fullData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1663436295919-aca728934fa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div
        data-aos="fade-up"
        className="relative z-10  p-8 rounded-lg  w-full max-w-3xl"
      >
        <div className="py-2">
          <SectionTitle className="text-solidWhite" title="Register" />
        </div>
        <form onSubmit={handleRegister} className="space-y-6">
          <div className="grid grid-cols-2 gap-5">
            <div>
              <InputWithValue
                labelName="Name"
                labelClassName="text-solidWhite"
                inputType="text"
                inputName="name"
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                required
                className="bg-transparent text-solidWhite"
              />
            </div>
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
            <div>
              <InputWithValue
                labelName="Company"
                labelClassName="text-solidWhite"
                inputType="text"
                inputName="company"
                value={company}
                onChange={(e: any) => setCompany(e.target.value)}
                required
                className="bg-transparent text-solidWhite"
              />
            </div>
            <div>
              <InputWithValue
                labelName="Contact Number"
                labelClassName="text-solidWhite"
                inputType="text"
                inputName="contactNo"
                value={contactNo}
                onChange={(e: any) => setContactNo(e.target.value)}
                required
                className="bg-transparent text-solidWhite"
              />
            </div>

            <div>
              <InputWithValue
                labelName="Designation"
                labelClassName="text-solidWhite"
                inputType="text"
                inputName="designation"
                value={designation}
                onChange={(e: any) => setDesignation(e.target.value)}
                required
                className="bg-transparent text-solidWhite"
              />
            </div>
            <div>
              <PhotoUpload
                file={profileImage}
                setFile={setProfileImage}
                inputLabelClass="text-solidWhite"
                imgDetailsClass="text-solidWhite"
              />
            </div>
          </div>
          <div className="w-full">
            <Button primary type="submit" className="w-full">
              Register
            </Button>
          </div>
        </form>
        <p className="mt-6 text-center text-grayForBorder">
          Already have an account?{" "}
          <Link href="/login">
            <span className="text-blue-400 hover:text-indigo-500">Login</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
