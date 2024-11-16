import React, { useState } from "react";
import Navbar from "./Navbar"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar hideAuthButtons={true} /> 
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 md:w-1/3 w-4/5">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
          <form onSubmit={handleSubmit}>
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
            <div className="mb-6">
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
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-800 text-white py-2 rounded hover:bg-orange-600 transition duration-200"
            >
              Login
            </button>
          </form>
          <p className="mt-4 text-sm text-gray-400 text-center">
            Don't have an account?{" "}
            <a href="/register" className="text-orange-500 hover:underline">
              Register
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
