import axios from "axios";
import { useState, useEffect } from "react";
import { DormCard } from "./DormCard";
import { FaHouse } from "react-icons/fa6";

interface DormListings {
  user_ID: string;
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
  featuresNames: string[];
}

interface Props {
  dormListings: DormListings[];
}

export const DormCardContainer: React.FC<Props> = ({ dormListings }) => {
  return (
    <div className="grid grid-cols-3 place-items-center ps-16 pe-16 pb-12 gap-y-10 ">
      {dormListings &&
        dormListings.map((dorm: any) => (
          <DormCard key={dorm.id} dormId={dorm.dormId} />
        ))}
      <h1 className="col-span-3 text-content-darkBrown font-semibold text-lg flex items-baseline gap-x-1 cursor-pointer">
        <FaHouse />
        More Dorms
      </h1>
    </div>
  );
};
