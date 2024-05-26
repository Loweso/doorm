"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { userStore } from "@/store/userStore";
import { useState } from "react";
import { FaList } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { MdOutlineEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

interface DormInfo {
  user_ID: string | null;
  dormId: string;
  listingName: string;
  rentType: string;
  address: string;
  availability: string;
  description: string;
  rent: number;
  room_image: string;
  createdAt: string;
  user_email: string;
  user_fullName: string;
  user_contactNo: string;
  features: string[];
}

interface Props {
  dormInfo: DormInfo;
}

export const DormInfo: React.FC<Props> = ({ dormInfo }) => {
  const user = userStore((state) => state.user);
  const [isEditHovered, setIsEditHovered] = useState(false);
  const [isDelHovered, setIsDelHovered] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);

  const router = useRouter();

  const handleDeleteModal = () => {
    setIsDeleteModal((isDeleteModal) => !isDeleteModal);
  };

  const deleteListing = async () => {
    try {
      await axios.delete(`http://localhost:5000/listing/${dormInfo.dormId}`);
      router.push("/");
    } catch (error) {
      console.error("Error fetching dorm information:", error);
    }
  };

  return (
    <div className="flex flex-col w-3/4 bg-[#FFFFFF] rounded-2xl border-[1px] break-words shadow-lg">
      {isDeleteModal && (
        <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full bg-[#000000]/75 z-50">
          <div className="flex flex-col items-center justify-center w-1/3 h-1/4 bg-bgColor rounded-2xl">
            <p className="text-xl font-bold">Delete Listing</p>
            <p className="text-lg">
              Are you sure you want to delete this listing?
            </p>
            <div className="flex flex-row items-center justify-evenly w-full h-1/3">
              <button
                className="w-2/5 flex justify-center py-2 px-3 border-[1px] rounded-lg bg-content-white bg-opacity-35 hover:bg-[#DCE0E6]"
                onClick={handleDeleteModal}
              >
                Cancel
              </button>
              <button
                className="w-2/5 flex justify-center py-2 px-3 border-[1px] rounded-lg bg-accentColor-earthyBrown bg-opacity-35 hover:bg-opacity-50"
                onClick={deleteListing}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="h-[50vh] w-full rounded-2xl bg-[#EFEBE3] border-b-[1px]">
        <div className="flex h-[40vh] w-full rounded-2xl bg-[#FFFFFF] p-6 border-b-[1px]">
          <Image
            src={dormInfo?.room_image ? dormInfo.room_image : "/shrekid.jpg"}
            height={300}
            width={300}
            alt="No image"
            className="w-1/3 h-full rounded-lg"
          />

          <div className="flex flex-col justify-between w-2/3 h-full py-6 px-10 items-between">
            <p className="text-3xl font-semibold">
              {dormInfo && dormInfo.listingName}
            </p>
            {dormInfo &&
              dormInfo.user_ID &&
              user &&
              user?.user_ID == dormInfo?.user_ID && (
                <Link
                  href={`/listing/${dormInfo.dormId}/applications`}
                  className="flex items-center gap-x-2 text-md border w-48 p-1 rounded justify-center bg-accentColor-earthyBrown bg-opacity-35"
                >
                  <FaList color="#6D5D55" className="w-4 h-4" />
                  View Applications
                </Link>
              )}
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
            </div>
            {user && dormInfo && user.user_ID === dormInfo.user_ID && (
              <div className="flex flex-column items-end pb-4">
                {dormInfo && (
                  <Link
                    href={`http://localhost:3000/listing/${dormInfo.dormId}/edit`}
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
                )}

                <button
                  className="flex items-center h-10 p-2"
                  onMouseEnter={() => setIsDelHovered(true)}
                  onMouseLeave={() => setIsDelHovered(false)}
                  onClick={handleDeleteModal}
                >
                  {isDelHovered ? (
                    <MdDelete color="black" className="h-8 w-6" />
                  ) : (
                    <MdDeleteOutline color="black" className="h-8 w-6" />
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-around p-6">
          <button className="text-xl font-semibold hover:text-[#6D5D55]">
            Info
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
          &nbsp; {dormInfo && dormInfo.rent}
        </p>
        <p className="text-xl font-semibold">Amenities</p>
        {dormInfo && dormInfo.features.length > 0 && dormInfo.features ? (
          dormInfo.features.map((feature: string) => (
            <p key={feature} className="ml-[2vw]">
              {feature}
            </p>
          ))
        ) : (
          <p className="ml-[2vw]">No features available</p>
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
