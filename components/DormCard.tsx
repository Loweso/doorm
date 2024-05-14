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

interface Props {
  dormId: string;
}

export const DormCard: React.FC<Props> = ({ dormId }) => {
  const [dormInfo, setDormInfo] = useState<any>(null);

  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/listing/${dormId}`
        );
        setDormInfo(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, [dormId]);

  const params = useParams<{ userId: string }>();
  const isUserListingRoute = usePathname() === `/user/${params.userId}/listing`;
  const isUserApplicationsRoute =
    usePathname() === `/user/${params.userId}/applications`;

  return (
    <Link
      href={`http://localhost:3000/listing/${dormId}`}
      className="flex w-80 h-80"
    >
      <div className="w-full h-full bg-[#FFFFFF] bg-opacity-80 rounded-xl overflow-hidden shadow-lg">
        <div className="w-full h-[65%] bg-accentColor-lightBlue overflow-hidden">
          <Image
            src={dormInfo?.room_image ? dormInfo.room_image : "/shrekid.jpg"}
            height={300}
            width={300}
            alt="No image"
            className="w-full h-full"
          />
          )
        </div>
        <div className="px-4 py-3 font-semibold text-content-darkBrown ">
          <p className="text-2xl">{dormInfo && dormInfo.listingName}</p>
          <div className="flex  justify-between py-1">
            <p className="font-light text-xs italic ">
              by <span>{dormInfo && dormInfo.user_fullName}</span>
            </p>
            <p className="font-normal items-center text-xs flex gap-x-[1px]">
              <PiMapPinFill size={15} />
              {dormInfo && dormInfo.address}
            </p>
          </div>
          {!isUserListingRoute &&
            !isUserApplicationsRoute &&
            (dormInfo && dormInfo.features ? (
              <div className="flex ps-2 pt-3 font-normal text-xs gap-x-6">
                {dormInfo.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center gap-x-1">
                    <BsPinAngleFill size={10} />
                    <span>{feature}</span>
                  </div>
                ))}
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
