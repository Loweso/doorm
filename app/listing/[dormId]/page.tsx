"use client";
import React from "react";
import { DormInfo } from "@/components/dormInfo/dormInfo";
import { DormApply } from "@/components/dormInfo/dormApply";
import { DormRecc } from "@/components/dormInfo/dormRecc";
import { Searchbar } from "@/components/search/searchbar";
import { userStore } from "@/store/userStore";
import { useEffect, useState } from "react";
import axios from "axios";

function Page({
  params,
}: {
  params: {
    dormId: string;
  };
}) {
  const user = userStore((state) => state.user);
  const [dormInfo, setDormInfo] = useState<any>(null);
  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/listing/read/${params.dormId}`
        );
        setDormInfo(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, [params.dormId]);

  return (
    <div className="flex flex-col flex-grow w-full items-center px-20 pb-20 gap-12">
      <Searchbar />
      <DormInfo dormInfo={dormInfo} />
      {user && dormInfo && user.user_ID !== dormInfo.user_ID && (
        <DormApply dormInfo={dormInfo} />
      )}
      <p className="font-semibold text-[#B67352] text-4xl mt-12">
        You might also be interested in...
      </p>
      <DormRecc />
      <DormRecc />
      <button>View More →</button>
    </div>
  );
}

export default Page;
