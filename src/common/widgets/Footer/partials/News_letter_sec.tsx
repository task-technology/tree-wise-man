"use client";
import { useState } from "react";
import Button from "@components/Button";
import InputWithValue from "@components/Input With Value";
import { validateEmail } from "../../../../shared/helpers/emailVerifications";

import swal from "sweetalert";
import { useNewsSubscribeMutation } from "../../../../redux/features/api/others";
import { getFromCookie } from "../../../../shared/helpers/local_storage";
import { authKey } from "@config/constants";
import { showSwal } from "../../../../shared/helpers/SwalShower";

const News_letter_sec = () => {
  const [email, setEmail] = useState("");
  const [sendEmail, { isLoading }] = useNewsSubscribeMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      swal("warning", "Please enter a valid email", "Warning");
      return;
    }

    const fullData = { email };

    const result = await sendEmail({ fullData });
    const isSwalTrue = showSwal(result);
    if (isSwalTrue) {
      setEmail("");
    }
  };

  return (
    <section className="px-1">
      <h3 className="text-2xl font-[600] mb-4 uppercase">Newsletter</h3>

      <form onSubmit={handleSubmit}>
        <InputWithValue
          className="text-solidBlack"
          inputType="email"
          required
          inputPlaceholder="Enter your email address"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
        />
        <div className="w-full mt-4">
          <Button
            loading={isLoading}
            type="submit"
            className="rounded-lg w-full bg-secondary/80 uppercase shadow-md text-lg min-h-[50px] lg:min-h-[40px]"
          >
            Subscribe Now
          </Button>
        </div>
      </form>
    </section>
  );
};

export default News_letter_sec;
