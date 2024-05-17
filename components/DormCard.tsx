"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PiMapPinFill } from "react-icons/pi";
import { BsPinAngleFill } from "react-icons/bs";
import { usePathname, useRouter } from "next/navigation";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { useParams } from "next/navigation";
import Image from "next/image";

interface DormCardInfo {
  dormId: string;
  room_image: string;
  listingName: string;
  fullName: string;
  address: string;
  featureNames: string[];
}

interface Props {
  dormcardinfo: DormCardInfo;
}

export const DormCard: React.FC<Props> = ({ dormcardinfo }) => {
  const router = useRouter();
  const [isDelHovered, setIsDelHovered] = useState(false);
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const params = useParams<{ userId: string }>();
  const isUserListingRoute = usePathname() === `/user/${params.userId}/listing`;
  const isUserApplicationsRoute =
    usePathname() === `/user/${params.userId}/applications`;

  const handleDeleteModal = () => {
    setIsDeleteModal((isDeleteModal) => !isDeleteModal);
  };

  const deleteListing = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/listing/${dormcardinfo.dormId}`
      );
    } catch (error) {
      console.error("Error fetching dorm information:", error);
    }
  };

  return (
    <Link
      href={`http://localhost:3000/listing/${dormcardinfo.dormId}`}
      className="flex w-80 h-80"
    >
      <div className="w-full h-full bg-[#FFFFFF] bg-opacity-80 rounded-xl overflow-hidden shadow-lg">
        <div className="w-full h-[64%] bg-accentColor-lightBlue overflow-hidden">
          <Image
            src={
              dormcardinfo?.room_image
                ? dormcardinfo.room_image
                : "/shrekid.jpg"
            }
            height={300}
            width={300}
            alt="No image"
            className="w-full h-full"
          />
          )
        </div>
        <div className="px-4 py-1 font-semibold text-content-darkBrown ">
          <p className="text-2xl">{dormcardinfo && dormcardinfo.listingName}</p>
          <div className="flex flex-col justify-between py-1 gap-y-1">
            <p className="font-light text-xs italic ">
              by <span>{dormcardinfo && dormcardinfo.fullName}</span>
            </p>
            <p className="font-normal items-center text-xs flex gap-x-[1px]">
              <PiMapPinFill size={15} />
              {dormcardinfo && dormcardinfo.address.length > 38
                ? dormcardinfo.address.substring(0, 38)
                : dormcardinfo.address}
            </p>
          </div>
          {!isUserListingRoute &&
            !isUserApplicationsRoute &&
            (dormcardinfo && dormcardinfo.featureNames ? (
              <div className="flex pt-1 justify-evenly font-normal text-[0.65rem] gap-x-6">
                {dormcardinfo.featureNames.map(
                  (feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-x-1">
                      <BsPinAngleFill size={10} />
                      <span>{feature}</span>
                    </div>
                  )
                )}
              </div>
            ) : (
              <p>No features available</p>
            ))}
          {isUserListingRoute && !isUserApplicationsRoute && (
            <div className="flex pt-0 font-normal text-xs justify-between  ">
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
              <Link
                href={`http://localhost:3000/listing/${dormcardinfo.dormId}/edit`}
                className="flex cursor-pointer items-center justify-center w-[45%] gap-x-1 border-[1px] p-1 rounded-md bg-accentColor-earthyYellow bg-opacity-35"
              >
                <LiaEdit size={15} />
                <span>Edit Listing</span>
              </Link>
              <button
                onClick={handleDeleteModal}
                className="flex cursor-pointer items-center justify-center w-[45%] gap-x-1 border-[1px] p-1 rounded-md bg-accentColor-earthyBrown bg-opacity-35 "
              >
                <MdDelete size={15} />
                <span>Delete Listing</span>
              </button>
            </div>
          )}
          {isUserApplicationsRoute && !isUserListingRoute && (
            <div className="flex pt-1  font-normal text-xs justify-between   ">
              <span className="flex items-center justify-center w-full gap-x-1 border-[1px] p-2 rounded-md bg-accentColor-lightBlue bg-opacity-35">
                Pending
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
