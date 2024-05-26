"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { userStore } from "@/store/userStore";

interface DormInfo {
  user_ID?: string | null;
  listingName: string;
  rentType: string;
  address: string;
  availability: string;
  description: string;
  rent: number;
  room_image?: string;
  createdAt: string;
  user_email: string;
  user_fullName: string;
  user_contactNo: string;
  features: string[];
}

interface Props {
  dormInfo: DormInfo;
  dormId: string;
}

interface ApplyInfo {
  user_ID: string | undefined;
  dormId: string;
  rent: number;
  status: string;
}

export const DormApply: React.FC<Props> = ({ dormInfo, dormId }) => {
 
  const user = userStore((state) => state.user); 

  const [applyInfo, setApplyInfo] = useState<ApplyInfo>({
    user_ID: user?.user_ID,
    rent: dormInfo.rent,
    dormId: dormId,
    status: "Pending",
  });

  const createApplication = async () => {
    console.log(applyInfo)
    try {
      await axios.post(`http://localhost:5000/listing/${dormId}/applications`, applyInfo );
      setApplyInfo((prevApplyInfo) => ({
        ...prevApplyInfo,
        rent: dormInfo.rent,
      }));
    } catch (error) {
      console.error("Error inserting listing:", error);
    }
  };

  const handleRentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newRent = Number(event.target.value);
    setApplyInfo((prevApplyInfo) => ({
      ...prevApplyInfo,
      rent: newRent,
    }));
  };

  return (
    <div className="flex h-[10vh] w-3/4 justify-around">
      <div className="w-1/2 flex flex-col font-semibold">
        Negotiate Price (in PHP):
        <input
          type="number"
          min={dormInfo.rent}
          step="1000"
          value={applyInfo.rent}
          onChange={handleRentChange}
          className="rounded-xl p-3"
        />
      </div>
      <button className="w-1/3 p-3 font-semibold text-xl rounded-xl bg-[#B65E52]/[.5] hover:bg-[#B65E52]/[.65]" onClick={createApplication}>
        Apply for Listing
      </button>
    </div>
  );
};
