"use client";
import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", { name, email, message });
  };

  return (
    <div className="max-w-lg mx-auto  p-5  overflow-hidden">
      <div className="absolute inset-0  pointer-events-none"></div>
      <h2 className="text-2xl font-medium text-center mb-3 text-solidBlack">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div>
          <label
            className="block text-gray-800 text-sm font-semibold mb-2 text-solidBlack"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-gray-800 text-sm font-semibold mb-2 text-solidBlack"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-gray-800 text-sm font-semibold mb-2 text-solidBlack"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm "
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-center w-full">
          <button
            className="w-full bg-primary hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
