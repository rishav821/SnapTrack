// src/components/Register.js
import React, { useState } from "react";
import Navbar from "./Navbar";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar hideAuthButtons={true} />
      <div className="flex flex-col items-center justify-center min-h-screen pt-16"> {/* Adjust layout */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/3 w-4/5">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm text-gray-300" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-300" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm text-gray-300" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="Enter your password"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm text-gray-300" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="mt-1 p-2 w-full bg-gray-700 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                placeholder="Confirm your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 rounded hover:bg-orange-600 transition duration-200"
            >
              Register
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-400 text-center">
            Already have an account?{" "}
            <a href="/login" className="text-orange-500 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
