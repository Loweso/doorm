"use client";
import { DormCardContainer } from "@/components/DormCardContainer";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { userStore } from "@/store/userStore";

function Page() {
  const [dormListings, setDormListings] = useState<any>(null);
  const user = userStore((state) => state.user);
  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/${user?.user_ID}/listing`
        );

        setDormListings(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };
    fetchDormInfo();
  }, []);
  return (
    <main className=" flex flex-col bg-content-white space-y-12">
      <h1 className="mt-12 ml-24 text-3xl font-bold text-accentColor-earthyYellow">
        Your Listings
      </h1>
      {dormListings && <DormCardContainer dormListings={dormListings} />}
    </main>
  );
}

export default Page;
