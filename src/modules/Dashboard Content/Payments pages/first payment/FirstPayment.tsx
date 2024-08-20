"use client";
import Button from "@components/Button";
import SectionTitle from "@components/Section Title/SectionTitle";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

import {
  handleDecrease,
  handleIncrease,
  handlePackageSelect,
  handleProceed,
} from "./helpers/handlePlanSelection";
import { getUserInfo } from "../../../../shared/auth/auth.service";
import { packages } from "./config/constant";

const FirstPayment = () => {
  const [month, setMonth] = useState(1);
  const [price, setPrice] = useState(12);
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <SectionTitle
        title="Choose Your Subscription Plan"
        className="text-3xl font-bold mb-12"
      />

      <div className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              onClick={() =>
                handlePackageSelect({
                  packageDuration: pkg?.duration,
                  setMonth,
                  setPrice,
                })
              }
              className={`bg-gradient-to-b from-blue-100 to-blue-50 p-8 rounded-lg text-center relative transform transition-transform duration-300 hover:scale-105 shadow-lg ${
                month === pkg.duration ? "border-4 border-blue-600" : ""
              }`}
            >
              {month === pkg.duration && (
                <FaCheckCircle className="absolute top-4 right-4 text-blue-600 text-2xl" />
              )}
              <h2 className="text-xl font-semibold mb-4">{pkg.name}</h2>
              <p className="text-2xl font-bold mb-4">${pkg.price.toFixed(2)}</p>
              <p className="text-gray-700 mb-8">
                {pkg.duration === 1
                  ? "Perfect for short-term use"
                  : pkg.duration === 6
                  ? "Best value for moderate use"
                  : "Ideal for long-term users"}
              </p>
            </div>
          ))}
        </div>

        {/* Custom Value Selector */}
        <div className="mt-12 w-full max-w-md bg-white p-6 rounded-lg shadow-lg text-center ">
          <label
            htmlFor="customValue"
            className="block text-xl font-medium mb-6 text-gray-700"
          >
            Custom Plan
          </label>
          <div className="flex items-center justify-center space-x-8 mb-6">
            <button
              onClick={() =>
                handleDecrease({ month, setMonth, setPrice, price })
              }
              className="bg-blue-600 text-white py-1 px-6 rounded-l-xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              <span className="text-xl font-semibold">-</span>
            </button>
            <p className="text-2xl font-semibold text-gray-800">
              {month} month{month > 1 ? "s" : ""}
            </p>
            <button
              onClick={() =>
                handleIncrease({ month, setMonth, setPrice, price })
              }
              className="bg-blue-600 text-white py-1 px-6 rounded-r-xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
            >
              <span className="text-xl font-semibold">+</span>
            </button>
          </div>
          <p className="text-xl font-medium text-gray-800">
            Price: ${price.toFixed(2)}
          </p>
        </div>

        {/* Proceed Button */}
        <Button
          disabled={!user?.id}
          onClick={() => handleProceed({ month, price, id: user?.id })}
          primary
          className="mt-8 hover:scale-105 shadow-lg"
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default FirstPayment;
