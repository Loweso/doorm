"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Link from "next/link";
import { PiMapPinFill } from "react-icons/pi";
import { BsPinAngleFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
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
  const params = useParams<{ userId: string }>();
  const isUserListingRoute = usePathname() === `/user/${params.userId}/listing`;
  const isUserApplicationsRoute =
    usePathname() === `/user/${params.userId}/applications`;

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
        <div className="px-4 py-2 font-semibold text-content-darkBrown ">
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
            <div className="flex pt-1  font-normal text-xs justify-between   ">
              <button className="flex items-center justify-center w-[45%] gap-x-1 border-[1px] p-2 rounded-md bg-accentColor-earthyYellow bg-opacity-35">
                <LiaEdit size={15} />
                <span>Edit Listing</span>
              </button>
              <button className="flex  items-center justify-center w-[45%] gap-x-1 border-[1px] p-2 rounded-md bg-accentColor-earthyBrown bg-opacity-35">
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
