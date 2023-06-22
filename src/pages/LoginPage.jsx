import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginImg from "../assets/images/city.jpg";

const LoginPage = () => {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const navigateTo = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (number.length === 4 && name.trim() !== "") {
      localStorage.setItem("isLoggedIn", "true");
      alert(`Welcome ${name}`);
      navigateTo("/todos");
    } else {
      alert("Invalid code and name");
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
        <div className="hidden sm:block">
          <img
            className="w-full h-full object-cover"
            src={loginImg}
            alt="Login"
          />
        </div>

        <div className="bg-gray-800 flex flex-col justify-center">
          <div className="max-w-[400px] w-full mx-auto rounded-lg bg-gray-900 p-8 px-8">
            <h2 className="text-4xl dark:text-white font-bold text-center">
              Login
            </h2>
            <div className="flex flex-col text-gray-400 py-5">
              <label>Masukan 4 angka</label>
              <input
                className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="text"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>
            <div className="flex flex-col text-gray-400 py-2">
              <label>Nama anda</label>
              <input
                className="p-2 rounded-lg bg-gray-700 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
                type="password"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <button
              className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg"
              type="submit"
              onClick={handleLogin}
            >
              SIGN IN
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
