"use client";
import Button from "@components/Button";
import SectionTitle from "@components/Section Title/SectionTitle";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const PaymentPackages = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [customValue, setCustomValue] = useState<number>(1);
  const [customType, setCustomType] = useState<"months" | "years">("months");

  const increments = [1, 3, 6, 12, 24, 36]; // Months

  const getPrice = (value: number, type: "months" | "years") => {
    const monthlyRate = 9.99; // Example monthly rate
    const yearlyRate = 79.99; // Example yearly rate

    if (type === "months") {
      return `$${(monthlyRate * value).toFixed(2)}`;
    }
    return `$${(yearlyRate * value).toFixed(2)}`;
  };

  const getDisplayValue = (value: number, type: "months" | "years") => {
    if (type === "years") {
      return `${value} Year${value > 1 ? "s" : ""}`;
    }
    return `${value} Month${value > 1 ? "s" : ""}`;
  };

  const increaseValue = () => {
    if (customType === "months") {
      const nextIndex = increments.indexOf(customValue) + 1;
      if (nextIndex < increments.length) {
        if (increments[nextIndex] === 12) {
          setCustomType("years");
          setCustomValue(1);
        } else if (increments[nextIndex] === 24) {
          setCustomType("years");
          setCustomValue(2);
        } else if (increments[nextIndex] === 36) {
          setCustomType("years");
          setCustomValue(3);
        } else {
          setCustomValue(increments[nextIndex]);
        }
      } else {
        setCustomValue(1); // Reset to 1 month
        setCustomType("months");
      }
    } else if (customType === "years") {
      const nextIndex = increments.indexOf(customValue * 12) + 1;
      if (nextIndex < increments.length) {
        setCustomValue(increments[nextIndex] / 12);
      } else {
        // Optionally handle the case when max value is reached
      }
    }
  };

  const decreaseValue = () => {
    if (customType === "months") {
      const prevIndex = increments.indexOf(customValue) - 1;
      if (prevIndex >= 0) {
        setCustomValue(increments[prevIndex]);
      } else {
        setCustomValue(1); // Reset to 1 month
      }
    } else if (customType === "years") {
      const currentValueInMonths = customValue * 12;
      if (currentValueInMonths === 12) {
        setCustomType("months");
      }
      const prevIndex = increments.indexOf(currentValueInMonths) - 1;
      if (prevIndex >= 0) {
        if (currentValueInMonths <= 12) {
          setCustomType("months");
          setCustomValue(increments[prevIndex]);
        } else {
          const newValueInMonths = increments[prevIndex];
          setCustomValue(newValueInMonths / 12);
        }
      } else {
        setCustomValue(1); // Reset to 1 month
        setCustomType("months");
      }
    }
  };

  const handlePackageSelect = (pkg: string, value: number) => {
    setSelectedPackage(pkg);
    setCustomValue(value);
    setCustomType("months"); // Reset to months when selecting a predefined package
  };

  const handleProceed = () => {
    const packageData = selectedPackage
      ? `${selectedPackage} Package`
      : `${getDisplayValue(customValue, customType)}`;
    console.log("Proceeding with:", packageData);
    // Implement further functionality here, like navigating to payment page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <SectionTitle
        title="Choose Your Subscription Plan"
        className="text-3xl font-bold mb-12"
      />

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
            } text-white py-1 px-6 rounded-full border transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={() => handlePackageSelect("1 Month", 1)}
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
            } text-white py-1 px-6 rounded-full border transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={() => handlePackageSelect("3 Months", 3)}
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
            } text-white py-1 px-6 rounded-full border transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500`}
            onClick={() => handlePackageSelect("1 Year", 12)}
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
            onClick={decreaseValue}
            className="bg-blue-600 text-white py-1 px-6 rounded-l-xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="text-xl font-semibold">-</span>
          </button>
          <p className="text-2xl font-semibold text-gray-800">
            {getDisplayValue(customValue, customType)}
          </p>
          <button
            onClick={increaseValue}
            className="bg-blue-600 text-white py-1 px-6 rounded-r-xl shadow-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        onClick={handleProceed}
        className="mt-8 hover:scale-105 shadow-lg"
      >
        Proceed to Payment
      </Button>
    </div>
  );
};

export default PaymentPackages;
