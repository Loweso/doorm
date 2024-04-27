"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { TbPencilCheck } from "react-icons/tb";
import { TiCancel } from "react-icons/ti";

const Page = () => {
  const [formData, setFormData] = useState({
    userName: "Sir Shrek",
    userEmail: "sirshrek@upc.edu.pc",
    userContactNo: "09095899627",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className="h-full flex flex-row">
      <div className="flex w-1/3 bg-[#B67352] flex flex-col justify-center items-center">
        <Image
          src="/shrekid.jpg"
          height={300}
          width={300}
          alt="No image"
          className="w-96 h-96 aspect-square rounded-full"
        />
      </div>
      <div className="w-2/3 p-6">
        <h1 className=" w-full font-bold text-6xl text-[#B67352] ">
          Edit your profile
        </h1>
        <div className="flex flex-row w-full h-[430px] border-[1px] rounded-lg border-gray-800 mt-4">
          <div className="w-5/6 h-full p-4 flex flex-col gap-3 ml-4">
            <div>
              <p className="text-2xl text-[#B67352] font-semibold">UserID:</p>
              <p className="font-semibold text-2xl text-[#6D5D55]">
                2024-0923803
              </p>
            </div>
            <div>
              <label
                htmlFor="userName"
                className="text-2xl text-[#B67352] font-semibold"
              >
                Name:
              </label>
              <br />
              <input
                type="text"
                id="userName"
                name="userName"
                placeholder="Input valid name"
                className="text-2xl text-[#6D5D55] p-2 border-[1px] rounded-lg border-gray-800"
                value={formData.userName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="text-2xl text-[#B67352] font-semibold"
              >
                Email Address:
              </label>
              <br />
              <input
                type="text"
                id="userEmail"
                name="userEmail"
                placeholder="Input valid e-mail address"
                className="text-2xl text-[#6D5D55] p-2 border-[1px] rounded-lg border-gray-800"
                value={formData.userEmail}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label
                htmlFor="contactNo"
                className="text-2xl text-[#B67352] font-semibold"
              >
                Phone Number:
              </label>
              <br />
              <input
                type="number"
                id="userContactNo"
                name="userContactNo"
                placeholder="Input valid phone number"
                className="text-2xl text-[#6D5D55] p-2 border-[1px] rounded-lg border-gray-800"
                value={formData.userContactNo}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="w-1/6 h-full justify-end flex items-center flex-col gap-4 py-12">
            <button className="w-16 h-16 bg-[#ECB159] border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#99733B]">
              <TbPencilCheck color="white" className="w-10 h-10 " />
            </button>
            <button className="w-16 h-16 bg-[#B67352] border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#905B40]">
              <TiCancel color="white" className="w-12 h-12 " />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Page;
