"use client";
import Button from "@components/Button";
import SectionTitle from "@components/Section Title/SectionTitle";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  decreaseValue,
  getDisplayValue,
  getPrice,
  increaseValue,
  handlePackageSelect,
  handleProceed,
} from "./helpers/handlePlanSelection";

const PaymentPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [customValue, setCustomValue] = useState<number>(1);
  const [customType, setCustomType] = useState<"months" | "years">("months");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <SectionTitle
        title="Choose Your Subscription Plan"
        className="text-3xl font-bold mb-12"
      />

      <div className="flex flex-col items-center justify-center ">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-5xl">
          {/* 1-Month Package */}
          <div
            className={`bg-gradient-to-b from-blue-100 to-blue-50 p-8 rounded-lg text-center relative transform transition-transform duration-300 hover:scale-105 shadow-lg`}
          >
            {selectedPackage === "1 Month" && (
              <FaCheckCircle className="absolute top-4 right-4 text-blue-600 text-2xl" />
            )}
            <h2 className="text-xl font-semibold mb-4">1 Month</h2>
            <p className="text-2xl font-bold mb-4">$9.99</p>
            <p className="text-gray-700 mb-8">Perfect for short-term use</p>
            <button
              className={`${
                selectedPackage === "1 Month"
                  ? "bg-blue-600  shadow-lg"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white py-1 px-6 rounded-full border transition-transform transform hover:scale-105 `}
              onClick={() =>
                handlePackageSelect({
                  pkg: "1 Month",
                  value: 1,
                  setSelectedPackage,
                  setCustomValue,
                  setCustomType,
                })
              }
            >
              {selectedPackage === "1 Month" ? "Selected" : "Select"}
            </button>
          </div>

          {/* 3-Months Package */}
          <div
            className={`bg-gradient-to-b from-blue-200 to-blue-100 p-8 rounded-lg text-center relative transform transition-transform duration-300 hover:scale-105 shadow-lg`}
          >
            {selectedPackage === "3 Months" && (
              <FaCheckCircle className="absolute top-4 right-4 text-blue-600 text-2xl" />
            )}
            <h2 className="text-xl font-semibold mb-4">3 Months</h2>
            <p className="text-2xl font-bold mb-4">$24.99</p>
            <p className="text-gray-700 mb-8">Best value for moderate use</p>
            <button
              className={`${
                selectedPackage === "3 Months"
                  ? "bg-blue-600  shadow-lg"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white py-1 px-6 rounded-full border transition-transform transform hover:scale-105`}
              onClick={() =>
                handlePackageSelect({
                  pkg: "3 Months",
                  value: 3,
                  setSelectedPackage,
                  setCustomValue,
                  setCustomType,
                })
              }
            >
              {selectedPackage === "3 Months" ? "Selected" : "Select"}
            </button>
          </div>

          {/* 1-Year Package */}
          <div
            className={`bg-gradient-to-b from-blue-300 to-blue-100 p-8 rounded-lg text-center relative transform transition-transform duration-300 hover:scale-105 shadow-lg`}
          >
            {selectedPackage === "1 Year" && (
              <FaCheckCircle className="absolute top-4 right-4 text-blue-600 text-2xl" />
            )}
            <h2 className="text-xl font-semibold mb-4">1 Year</h2>
            <p className="text-2xl font-bold mb-4">$79.99</p>
            <p className="text-gray-700 mb-8">Ideal for long-term users</p>
            <button
              className={`${
                selectedPackage === "1 Year"
                  ? "bg-blue-600  shadow-lg"
                  : "bg-blue-500 hover:bg-blue-600"
              } text-white py-1 px-6 rounded-full border transition-transform transform hover:scale-105`}
              onClick={() =>
                handlePackageSelect({
                  pkg: "1 Year",
                  value: 12,
                  setSelectedPackage,
                  setCustomValue,
                  setCustomType,
                })
              }
            >
              {selectedPackage === "1 Year" ? "Selected" : "Select"}
            </button>
          </div>
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
                decreaseValue({
                  customType,
                  customValue,
                  setCustomType,
                  setCustomValue,
                })
              }
              className="bg-blue-600 text-white py-1 px-6 rounded-l-xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 "
            >
              <span className="text-xl font-semibold">-</span>
            </button>
            <p className="text-2xl font-semibold text-gray-800">
              {getDisplayValue(customValue, customType)}
            </p>
            <button
              onClick={() =>
                increaseValue({
                  customType,
                  customValue,
                  setCustomType,
                  setCustomValue,
                })
              }
              className="bg-blue-600 text-white py-1 px-6 rounded-r-xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 "
            >
              <span className="text-xl font-semibold">+</span>
            </button>
          </div>
          <p className="text-xl font-medium text-gray-800">
            Price: {getPrice(customValue, customType)}
          </p>
        </div>

        {/* Proceed Button */}
        <Button
          primary
          onClick={() =>
            handleProceed({ selectedPackage, customValue, customType })
          }
          className="mt-8 hover:scale-105 shadow-lg"
        >
          Proceed to Payment
        </Button>
      </div>
    </div>
  );
};

export default PaymentPackages;
