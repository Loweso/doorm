"use client";
import { DormCardContainer } from "@/components/DormCardContainer";
import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { userStore } from "@/store/userStore";

function Applications({}) {
  const user = userStore((state) => state.user);
  const [dormListings, setDormListings] = useState<any>(null);

  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/user/${user?.user_ID}/applications`
        );
        setDormListings(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, []);

  return (
    <main className=" flex flex-col bg-content-white space-y-12">
      <h1 className="mt-12 ml-24 text-3xl font-bold text-accentColor-earthyYellow">
        Your Applications
      </h1>
      <DormCardContainer dormListings={dormListings} />
    </main>
  );
}

export default Applications;
