"use client";
import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";

interface Props {
  dormId: string;
}
export const DormInfo: React.FC<Props> = ({ dormId }) => {
  const [dormInfo, setDormInfo] = useState<any>(null);

  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/listing/read/${dormId}`
        );
        setDormInfo(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, [dormId]);

  return (
    <div className="flex flex-col w-3/4 bg-[#FFFFFF] rounded-2xl border-[1px] break-words shadow-lg">
      <div className="h-[50vh] w-full rounded-2xl bg-[#EFEBE3] border-b-[1px]">
        <div className="flex h-[40vh] w-full rounded-2xl bg-[#FFFFFF] p-6 border-b-[1px]">
          <Image
            src="/shrekid.jpg"
            height={300}
            width={300}
            alt="No image"
            className="w-1/3 h-full rounded-lg"
          />
          <div className="flex flex-col justify-between w-2/3 h-full p-6 items-between">
            <p className="text-3xl font-semibold">
              {dormInfo && dormInfo.listingName.toUpperCase()}
            </p>
            <p className="flex justify-between">
              Date Posted: {dormInfo && dormInfo.createdAt}
              <span className="justify-between">
                {dormInfo && dormInfo.availability}
              </span>
            </p>
          </div>
          <button className="flex items-center h-10 p-2">
            <IoShareSocialOutline className="h-8 w-6" />
          </button>

          <button className="flex items-center h-10 p-2">
            <IoHeartOutline className="h-8 w-6" />
          </button>
        </div>
        <div className="flex items-center justify-around p-6">
          <button className="text-xl font-semibold hover:text-[#6D5D55]">
            Info
          </button>
          <button className="text-xl font-semibold hover:text-[#6D5D55]">
            Photos
          </button>
          <button className="text-xl font-semibold hover:text-[#6D5D55]">
            Reviews
          </button>
        </div>
      </div>
      <div className="flex flex-col p-12 gap-6">
        <p className="text-xl font-semibold">Description</p>
        <p className="text-justify">{dormInfo && dormInfo.description}</p>
        <p>
          <span className="text-xl font-semibold">Property Type</span>
          &nbsp; {dormInfo && dormInfo.rentType}
        </p>
        <p>
          <span className="text-xl font-semibold">Location</span>
          &nbsp; {dormInfo && dormInfo.address}
        </p>
        <p>
          <span className="text-xl font-semibold">Price</span>
          &nbsp; {dormInfo && dormInfo.ideal_price}
        </p>
        <p className="text-xl font-semibold">Amenities</p>
        <p className="ml-[2vw]">
          Amenities
          <br />
          Amenities
          <br />
          Amenities
        </p>
        <p className="text-xl font-semibold">Contact Person</p>
        <p className="ml-[2vw]">
          {dormInfo && dormInfo.user_fullName}
          <br />
          {dormInfo && dormInfo.user_contactNo}
          <br />
          {dormInfo && dormInfo.user_email}
        </p>
      </div>
    </div>
  );
};
