"use client";
import React, { useState } from "react";
import { useContactUsMutation } from "../../../../../redux/features/api/others";
import { getFromCookie } from "../../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import { showSwal } from "../../../../../shared/helpers/SwalShower";
import { validateEmail } from "../../../../../shared/helpers/emailVerifications";
import swal from "sweetalert";
import InputWithValue from "@components/Input With Value";
import Button from "@components/Button";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sendEmail, { isLoading }] = useContactUsMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      swal("warning", "Please enter a valid email address", "Warning");
      return;
    }

    const fullData = {
      name,
      email,
      message,
    };
    const result = await sendEmail({ fullData });

    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-transparent bg-opacity-25 bg-white shadow-xl rounded-lg relative overflow-hidden">
      <div className="absolute inset-0  pointer-events-none"></div>
      <h2 className="text-4xl font-extrabold text-center mb-8 text-solidWhite">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <InputWithValue
            required
            labelClassName="text-solidWhite"
            labelName="Name"
            inputType="text"
            inputPlaceholder="Your Name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />
        </div>
        <div>
          <InputWithValue
            required
            labelClassName="text-solidWhite"
            labelName="Email"
            inputType="email"
            inputPlaceholder="Your Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <InputWithValue
            required
            labelName="Message"
            labelClassName="text-solidWhite"
            inputPlaceholder="Your Message"
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
          />
        </div>
        <div className=" w-full py-8">
          <Button loading={isLoading} className="w-full" type="submit">
            Send
          </Button>
        </div>
      </form>
      {/* <SocialMediaLinks /> */}
    </div>
  );
};

export default ContactForm;
