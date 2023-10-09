import React from "react";
import { data } from "../sample-data/data";
import { Link } from "react-router-dom";
import Header from "../components/Header";

function LoginPage() {
  return (
    <>
    <Header/>
    <main className=" container mx-auto xl:px-10 px-1 py-5 flex lg:flex-row flex-col-reverse items-center justify-center gap-5">
      <div className="border lg:w-1/2 border-sky-900 rounded-2xl p-8">
        <div className="text-center">
          <h2 className="bg-sky-900 text-white text-2xl font-semibold inline-block px-16 py-1 pb-2 rounded-3xl">
            Benefits of Saving Account
          </h2>
        </div>
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex items-center justify-center gap-3 text-xl mt-5"
            >
              {item.icon}
              {item.text}
            </div>
          );
        })}
      </div>
      <div className=" lg:w-1/2 bg-sky-900 rounded-2xl p-16">
        <form className="bg-white px-20 py-10 rounded-2xl text-center">
          <div className="flex flex-col items-start gap-1 mb-5">
            <label className="text-sky-900 text-sm">Enter Number</label>
            <input
              type="number"
              className="w-full outline-none border border-gray-500 px-4 py-2 rounded-md"
              placeholder="Enter Mobile No"
            />
          </div>
          <div className="flex flex-col items-start gap-1 mb-1">
            <label className="text-sky-900 text-sm">Enter Password</label>
            <input
              type="password"
              className="w-full outline-none border border-gray-500 px-4 py-2 rounded-md"
              placeholder="Password"
            />
          </div>
          <div className="text-right mb-5">
            <span className="text-sm">Forget Password?</span>
          </div>
          <div className="mb-6">
            <button className="bg-sky-900 text-white font-bold px-16 py-1 pb-2 rounded-2xl">
              Login
            </button>
          </div>
          <Link to={"/ekyc"}>
            <span className="text-sky-900 font-semibold text-lg">
              Become a Member
            </span>
          </Link>
        </form>
      </div>
    </main>
    </>
  );
}

export default LoginPage;
