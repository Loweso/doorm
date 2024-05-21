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
    <div
      className={
        dormListings && dormListings.length > 0
          ? "grid grid-cols-3 place-items-center ps-16 pe-16 pb-12 gap-y-10"
          : "flex justify-center items-center"
      }
    >
      {dormListings &&
        dormListings.map((dorm: any, index: any) => (
          <Link href={`/listing/${dorm.dormId}`} key={index}>
            <DormCard dormcardinfo={dorm} />
          </Link>
        ))}
      {dormListings && dormListings.length === 0 && (
        <div className="flex flex-col items-center space-y-2">
          <h1 className="font-semibold text-xl text-content-darkBrown">
            No listings found!
          </h1>
          <FaHouse
            width={500}
            height={500}
            className="h-20 w-20 text-content-darkBrown "
          />
        </div>
      )}
    </div>
  );
};
