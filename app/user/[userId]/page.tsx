"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { userStore } from "@/store/userStore";
import { FiEdit3 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { FaList } from "react-icons/fa6";
import axios from "axios";
import { RxCross1 } from "react-icons/rx";
import { useRouter } from "next/navigation";

export default function Page() {
  const user = userStore((state) => state.user);
  const router = useRouter();
  const [phoneNum, setPhoneNum] = useState(user?.contactNum);
  const [uneditedNum, setUneditedNum] = useState(phoneNum);
  const [editPhone, setEditPhone] = useState<boolean>(false);
  const editPhoneNum = () => {
    setUneditedNum(phoneNum);
    setEditPhone(!editPhone);
  };
  const cancelChange = () => {
    setPhoneNum(uneditedNum);
    setEditPhone(!editPhone);
  };

  const handleInputChange = (e: any) => {
    setPhoneNum(e.target.value);
  };

  const updatePhoneNumber = async () => {
    try {
      // Make a POST request to your backend API endpoint to update the phone number
      const response = await axios.put(
        `http://localhost:5000/user/${user?.user_ID}/edit`,
        {
          phoneNumber: phoneNum,
        }
      );
      console.log("Phone number updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating phone number:", error);
      // Handle error, such as displaying an error message to the user
    }
    setEditPhone(!editPhone);
  };

  return (
    user && (
      <div className="h-full flex flex-row ">
        <div className="flex-1 w-1/3 bg-[#B67352] flex flex-col justify-center items-center">
          <Image
            src={user.profilePicture}
            height={360}
            width={360}
            alt="No image"
            className="w-96 h-96 aspect-square rounded-full"
          />
        </div>
        <div className="w-2/3 p-6 mt-2">
          <h1 className=" w-full font-bold text-6xl text-[#B67352] ">
            Welcome,
            <span className="font-semibold text-6xl italic text-[#ECB159]">
              {user.fullName.split(" ")[0]}
            </span>
          </h1>
          <div className="w-full h-[430px] border-[1px] rounded-lg border-gray-800 mt-4">
            <div className="w-full h-3/4 flex flex-row">
              <div className="w-5/6 h-full p-4 flex flex-col gap-3 mt-2 ml-4">
                <div>
                  <p className="text-2xl text-[#B67352] font-semibold">
                    UserID:
                  </p>
                  <p className="font-semibold text-2xl text-[#6D5D55]">
                    {user?.user_ID}
                  </p>
                </div>
                <div>
                  <p className="text-2xl text-[#B67352] font-semibold">Name:</p>
                  <p className="text-2xl text-[#6D5D55]">{user?.fullName}</p>
                </div>
                <div>
                  <p className="text-2xl text-[#B67352] font-semibold">
                    Email Address:
                  </p>
                  <p className="text-2xl text-[#6D5D55]">{user?.email}</p>
                </div>
                {!editPhone && (
                  <div>
                    <p className="text-2xl text-[#B67352] font-semibold">
                      Phone Number:
                    </p>
                    <p className="text-2xl text-[#6D5D55]">
                      {phoneNum ? phoneNum : "no contact number"}
                    </p>
                  </div>
                )}
                {editPhone && (
                  <div>
                    <label
                      htmlFor="contactNo"
                      className="text-2xl text-[#B67352] font-semibold"
                    >
                      Phone Number:
                    </label>
                    <br />
                    <input
                      type="text"
                      id="userContactNo"
                      name="userContactNo"
                      placeholder="Input valid phone number"
                      className="text-2xl text-[#6D5D55] p-2 border-[1px] rounded-lg border-gray-800"
                      value={phoneNum}
                      onChange={handleInputChange}
                    />
                  </div>
                )}
              </div>
              <div className="w-1/6 h-full justify-end flex items-center flex-col gap-4">
                {!editPhone && (
                  <button
                    className="w-16 h-16 bg-[#ECB159] border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#99733B]"
                    onClick={editPhoneNum}
                  >
                    <FiEdit3 color="white" className="w-10 h-10 " />
                  </button>
                )}
                {editPhone && (
                  <button
                    className="w-16 h-16 bg-[#ec8559] border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#99733B]"
                    onClick={updatePhoneNumber}
                  >
                    <MdDone color="white" className="w-10 h-10 " />
                  </button>
                )}
                {editPhone && (
                  <button
                    className="w-16 h-16 bg-[#ec8559] border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#99733B]"
                    onClick={cancelChange}
                  >
                    <RxCross1 color="white" className="w-10 h-10 " />
                  </button>
                )}
              </div>
            </div>
            <div className="w-full h-1/4 flex justify-center items-center space-x-8">
              <Link href={`/user/${user?.user_ID}/listing`}>
                <button className="w-64 h-16 bg-[#DEDAD1] border-[1px] space-x-4 rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#D1CEC9] shadow-lg">
                  <FaList color="#6D5D55" className="w-8 h-8" />
                  <p className="text-2xl text-[#6D5D55] font-medium">
                    {" "}
                    Your Listings
                  </p>
                </button>
              </Link>
              <Link href={`/user/${user?.user_ID}/applications`}>
                <button className="w-80 h-16 bg-[#DEDAD1] border-[1px] space-x-4 rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#D1CEC9] shadow-lg">
                  <FaList color="#6D5D55" className="w-8 h-8" />
                  <p className="text-2xl text-[#6D5D55] font-medium">
                    {" "}
                    Your Applications
                  </p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
