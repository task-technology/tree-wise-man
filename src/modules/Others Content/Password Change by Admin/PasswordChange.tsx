"use client";

import Button from "@components/Button";
import Input from "@components/Input";
import InputWithValue from "@components/Input With Value";
import { useState } from "react";
import { usePasswordChangeMutation } from "../../../redux/features/api/others";
import { getFromCookie } from "../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import { showSwal } from "../../../shared/helpers/SwalShower";

const PasswordChange = () => {
  const token = getFromCookie(authKey);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passChange, { isLoading }] = usePasswordChangeMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const fullData = {
      email,
      newPassword: password,
    };
    const result = await passChange({ token, fullData });
    showSwal(result);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-semibold mb-3 text-gray-800">
          Change Password
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <InputWithValue
              labelName="Email"
              inputType="email"
              value={email}
              onChange={(e: any) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <InputWithValue
              labelName="New Password"
              inputType="password"
              value={password}
              onChange={(e: any) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <Button
              loading={isLoading}
              disabled={!email || !password}
              type="submit"
            >
              Change Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordChange;
