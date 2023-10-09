import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../assets/images (1).jpg";
import Header from "../components/Header";

function EKYCPage() {
  return (
    <>
    <Header/>
    <main className=" container mx-auto xl:px-20 px-5 py-5 flex lg:flex-row flex-col items-center justify-center gap-5">
      <div className=" flex items-center justify-center lg:w-1/2 relative bg-sky-200 rounded-2xl my-5">
        <img
          src={ProfileImg}
          alt="img"
          className="h-44 absolute -top-4 -left-4 rounded-2xl"
        />
        <div className=" w-1/2"></div>
        <div className=" w-1/2 pb-12 pt-16">
          <p className="xl:pr-16 xl:pl-0 pl-5 pr-10 mb-20">
            Lorem ipsum dolar sit amet, consectecture adipicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magana aliqua. Ut enim
            ad minim veniam.
          </p>
          <h3 className="text-xl font-bold text-black">Priyanka Chaudhary</h3>
          <span className="text-black font-semibold">UI/UX Designer</span>
        </div>
      </div>
      <div className=" lg:w-1/2 bg-sky-900 rounded-2xl p-16">
        <form className="bg-white px-16 py-10 rounded-2xl text-center">
          <h3 className="xl:text-3xl text-2xl font-semibold px-2 mb-5">Become A Member</h3>
          <div className=" mb-10">
            <span className="border-b-2 border-sky-900 text-sky-900 font-semibold inline-block w-1/2 cursor-pointer py-2">
              E - KYC
            </span>
            <span className=" font-semibold inline-block w-1/2 cursor-pointer py-2">
              Manual KYC
            </span>
          </div>
          <div className="flex flex-col items-start gap-1 mb-5">
            <label className="text-sky-900 text-sm">Enter Adhar no.</label>
            <input
              type="number"
              className="w-full outline-none border border-gray-500 px-4 py-2 rounded-md"
              placeholder="Enter Adhar no."
            />
          </div>
          <Link to={"/ekyc-form"}>
            <button className="bg-sky-900 text-white font-bold px-16 py-1 pb-2 rounded-2xl text-xl">
              Get OTP
            </button>
          </Link>
        </form>
      </div>
    </main>
    </>
  );
}

export default EKYCPage;
