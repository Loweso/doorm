"use client";
import { PiMapPinFill } from "react-icons/pi";
import { BsPinAngleFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import { LiaEdit } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import { useParams } from "next/navigation";

export const DormCard = () => {
  const params = useParams<{ userId: string }>();
  const isUserListingRoute = usePathname() === `/user/${params.userId}/listing`;
  const isUserApplicationsRoute =
    usePathname() === `/user/${params.userId}/applications`;
  return (
    <div className="w-80 h-80 bg-[#FFFFFF] bg-opacity-80 rounded-xl overflow-hidden shadow-lg">
      <div className="w-full h-[65%] bg-accentColor-lightBlue"></div>
      <div className="px-4 py-3 font-semibold text-content-darkBrown ">
        <p className="text-2xl">Name</p>
        <div className="flex  justify-between py-1">
          <p className="font-light text-xs italic ">
            by <span>Dorm_Lister</span>
          </p>
          <p className="font-normal items-center text-xs flex gap-x-[1px]">
            <PiMapPinFill size={15} />
            Lahug, Cebu City
          </p>
        </div>
        {!isUserListingRoute && !isUserApplicationsRoute && (
          <div className="flex ps-2 pt-3 font-normal text-xs gap-x-6  ">
            <div className="flex items-center gap-x-1">
              <BsPinAngleFill size={10} />
              <span>Amenity</span>
            </div>
            <div className="flex items-center gap-x-1">
              <BsPinAngleFill size={10} />
              <span>Amenity</span>
            </div>
          </div>
        )}
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
  );
};
