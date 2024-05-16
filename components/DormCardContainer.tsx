import axios from "axios";
import { useState, useEffect } from "react";
import { DormCard } from "./DormCard";
import { FaHouse } from "react-icons/fa6";
import Link from "next/link";

interface DormListings {
  dormId: string;
  room_image: string;
  listingName: string;
  fullName: string;
  address: string;
  featureNames: string[];
}

interface Props {
  dormListings: DormListings[];
}

export const DormCardContainer: React.FC<Props> = ({ dormListings }) => {
  return (
    <div className="grid grid-cols-3 place-items-center ps-16 pe-16 pb-12 gap-y-10 ">
      {dormListings &&
        dormListings.map((dorm: any, index: any) => (
          <Link href={`/listing/${dorm.dormId}`} key={index}>
            <DormCard dormcardinfo={dorm} />
          </Link>
        ))}
      <h1 className="col-span-3 text-content-darkBrown font-semibold text-lg flex items-baseline gap-x-1 cursor-pointer">
        <FaHouse />
        More Dorms
      </h1>
    </div>
  );
};
