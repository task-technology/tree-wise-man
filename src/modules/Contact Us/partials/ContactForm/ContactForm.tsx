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
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6 text-secondary">
        Contact Us
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className=" bg-primary hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
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
