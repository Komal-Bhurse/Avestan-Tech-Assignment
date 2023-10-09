import React from "react";
import ProfileImg from "../assets/images (1).jpg";
import { Link } from "react-router-dom";
import Header from "./Header";

function EKYCForm() {
  return (
    <>
    <Header/>
    <main className=" container mx-auto xl:px-24 lg:px-10 px-5 py-16">
      <form>
        <h2 className="text-3xl font-semibold mb-5">Personal Details</h2>
        <div className="flex sm:flex-row flex-col-reverse items-start justify-between">
          <div className="sm:w-3/5">
            <div className="flex items-center justify-between gap-10">
              <div className="flex flex-col items-start gap-1 mb-6 w-1/2">
                <label className="text-sky-900 text-xl font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col items-start gap-1 mb-6 w-1/2">
                <label className="text-sky-900 text-xl font-semibold">Surname</label>
                <input
                  type="text"
                  className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                  placeholder="Surname"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 mb-6 w-[80%]">
              <label className="text-sky-900 text-xl font-semibold">Aadhar Number</label>
              <input
                type="number"
                className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                placeholder="Aadhar No."
              />
            </div>
            <div className="flex flex-col items-start gap-1 mb-6 w-[80%]">
              <label className="text-sky-900 text-xl font-semibold">Mobile Number</label>
              <input
                type="number"
                className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                placeholder="Enter Mobile No"
              />
            </div>
            <div className="flex flex-col items-start gap-1 mb-6 w-[80%]">
              <label className="text-sky-900 text-xl font-semibold">Email Adress</label>
              <input
                type="email"
                className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
                placeholder="Email"
              />
            </div>
          </div>
          <img src={ProfileImg} alt="img" className="h-44 rounded-2xl" />
        </div>
        <div className="flex items-center justify-between gap-12">
          <div className="flex flex-col items-start gap-1 mb-6 w-1/2">
            <label className="text-sky-900 text-xl font-semibold">Address</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Address"
            />
          </div>
          <div className="flex flex-col items-start gap-1 mb-6 w-1/2">
            <label className="text-sky-900 text-xl font-semibold">Pin Code</label>
            <input
              type="number"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Pin Code"
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-1 mb-6 w-[30%]">
            <label className="text-sky-900 text-xl font-semibold">Country</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Country"
            />
          </div>
          <div className="flex flex-col items-start gap-1 mb-6 w-[30%]">
            <label className="text-sky-900 text-xl font-semibold">State</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="State"
            />
          </div>
          <div className="flex flex-col items-start gap-1 mb-6 w-[30%]">
            <label className="text-sky-900 text-xl font-semibold">District</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="District"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-12 mb-10">
          <div className="flex flex-col items-start gap-1 mb-6 w-1/2">
            <label className="text-sky-900 text-xl font-semibold">Gender</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Gender"
            />
          </div>
          <div className="flex flex-col items-start gap-1 mb-6 w-1/2">
            <label className="text-sky-900 text-xl font-semibold">Date Of Birth</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Date of Birth"
            />
          </div>
        </div>
        <h2 className="text-3xl font-semibold mb-5">Nominee Details</h2>
        <div className="flex items-center justify-between">
          <div className="flex flex-col items-start gap-1 mb-6 w-[30%]">
            <label className="text-sky-900 text-xl font-semibold">Name</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col items-start gap-1 mb-6 w-[30%]">
            <label className="text-sky-900 text-xl font-semibold">Middle</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Middle Name"
            />
          </div>
          <div className="flex flex-col items-start gap-1 mb-6 w-[30%]">
            <label className="text-sky-900 text-xl font-semibold">Surname</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Surname"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-12 mb-10">
          <div className="flex flex-col items-start gap-1 mb-6 w-1/2">
            <label className="text-sky-900 text-xl font-semibold">Nominee Relation</label>
            <input
              type="text"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Nominee Relation"
            />
          </div>
          <div className="flex flex-col items-start gap-1 mb-6 w-1/2">
            <label className="text-sky-900 text-xl font-semibold">Pan Card Number</label>
            <input
              type="number"
              className="w-full outline-none border border-gray-400 px-4 py-2 rounded-md"
              placeholder="Enter Pan Card No."
            />
          </div>
        </div>
        <div className="text-center">
        <Link to={"/profile"}>
          <button className="bg-sky-900 text-white font-bold px-16 py-2 pb-2 rounded-2xl text-xl">
            Submit
          </button>
        </Link>
        </div>
      </form>
    </main>
    </>
  );
}

export default EKYCForm;
