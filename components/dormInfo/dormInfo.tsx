"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { userStore } from "@/store/userStore";
import { useState, useEffect } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

interface Props {
  dormId: string;
}
export const DormInfo: React.FC<Props> = ({ dormId }) => {
  const user = userStore((state) => state.user);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isDelHovered, setIsDelHovered] = useState(false);
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
          <div className="flex flex-col justify-between w-2/3 h-full py-6 px-10 items-between">
            <p className="text-3xl font-semibold">
              {dormInfo && dormInfo.listingName}
            </p>
            <p className="flex justify-between">
              Date Posted: {dormInfo && dormInfo.createdAt}
              <span className="justify-between">
                {dormInfo && dormInfo.availability.toUpperCase()}
              </span>
            </p>
          </div>
          <div className="grid justify-items-center">
            <div className="flex flex-column">
              <button className="flex items-center h-10 p-2">
                <IoShareSocialOutline className="h-8 w-6" />
              </button>

              <button className="flex items-center h-10 p-2">
                <IoHeartOutline className="h-8 w-6" />
              </button>
            </div>
            <div className="flex flex-column items-end pb-4">
              <Link
                href={`http://localhost:3000/listing/${dormId}/edit`}
                className="flex items-center h-10 p-2"
                onMouseEnter={() => setIsEditHovered(true)}
                onMouseLeave={() => setIsEditHovered(false)}
              >
                {isEditHovered ? (
                  <MdModeEdit color="black" className="h-8 w-6" />
                ) : (
                  <MdOutlineEdit color="black" className="h-8 w-6" />
                )}
              </Link>

              <button
                className="flex items-center h-10 p-2"
                onMouseEnter={() => setIsDelHovered(true)}
                onMouseLeave={() => setIsDelHovered(false)}
              >
                {isDelHovered ? (
                  <MdDelete color="black" className="h-8 w-6" />
                ) : (
                  <MdDeleteOutline color="black" className="h-8 w-6" />
                )}
              </button>
            </div>
          </div>
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
          &nbsp; {dormInfo && dormInfo.rentType.toUpperCase()}
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
        {dormInfo && dormInfo.features ? (
          dormInfo.features.map((feature: string) => (
            <p key={feature} className="ml-[2vw]">
              {feature}
            </p>
          ))
        ) : (
          <p>No features available</p>
        )}
        <p className="text-xl font-semibold">Contact Person</p>
        <p className="ml-[2vw]">
          {dormInfo && dormInfo.user_fullName}
          <br />
          {dormInfo && dormInfo.user_email}
          <br />
          {dormInfo && dormInfo.user_contactNo}
        </p>
      </div>
    </div>
  );
};
