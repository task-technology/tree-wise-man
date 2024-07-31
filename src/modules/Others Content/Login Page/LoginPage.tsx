"use client";

import { useState, useEffect } from "react";
import Button from "@components/Button";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import InputWithValue from "@components/Input With Value";
import SectionTitle from "@components/Section Title/SectionTitle";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const fullData = {
      email,
      password,
    };
    console.log(fullData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1684332666088-f35b252b5aca?q=80&w=1791&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div
        data-aos="fade-up"
        className="relative z-10  p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <div className="py-2">
          <SectionTitle className="text-solidWhite" title="Login" />
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
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
              labelName="Password"
              labelClassName="text-solidWhite"
              inputType="password"
              inputName="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
              className="bg-transparent text-solidWhite"
            />
          </div>
          <div className="w-full">
            <Button primary type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
        <p className="mt-6 text-center text-grayForBorder">
          Do not have an account?{" "}
          <Link href="/register">
            <span className="text-blue-400 hover:text-indigo-500">
              Register
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
