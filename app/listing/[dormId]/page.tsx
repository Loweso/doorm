"use client";
import React from "react";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { DormInfo } from "@/components/dormInfo/dormInfo";
import { DormApply } from "@/components/dormInfo/dormApply";
import { DormRecc } from "@/components/dormInfo/dormRecc";
import { Searchbar } from "@/components/search/searchbar";
import { userStore } from "@/store/userStore";

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
          `http://localhost:5000/listing/${params.dormId}`
        );
        setDormInfo(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, [params.dormId]);

  const [dormListings, setDormListings] = useState<any>(null);

  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/listing/read/`);
        setDormListings(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, []);

  return (
    <div className="flex flex-col flex-grow w-full items-center px-20 pb-20 gap-12">
      <Searchbar />
      <DormInfo dormInfo={dormInfo} />
      {user && dormInfo && user.user_ID !== dormInfo.user_ID && (
        <DormApply dormInfo={dormInfo} dormId={params.dormId} />
      )}
      <p className="font-semibold text-[#B67352] text-4xl mt-12">
        You might also be interested in...
      </p>
      {dormListings && dormListings.length > 1 && (
        <>
          {params.dormId != dormListings[0].dormId && (
            <DormRecc dormId={dormListings[0].dormId} />
          )}
          {params.dormId != dormListings[1].dormId && (
            <DormRecc dormId={dormListings[1].dormId} />
          )}
        </>
      )}
      <Link href={`http://localhost:3000/listing`} className="hover:underline">
        View More →
      </Link>
    </div>
  );
}

export default Page;
