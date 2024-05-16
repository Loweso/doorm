"use client";
import { DormCardContainer } from "@/components/DormCardContainer";
import { Searchbar } from "@/components/search/searchbar";
import { useEffect, useState } from "react";
import useSearchStore from "@/store/searchStore";
import axios from "axios";

export default function Page() {
  const query = useSearchStore((state) => state.query);
  const [dormListings, setDormListings] = useState<any>(null);
  useEffect(() => {

    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/listing/read/`,
          {
            params: query,
          }
        );

        setDormListings(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, [query]);
  return (
    <main className=" flex flex-col bg-content-white space-y-12">
      <div className="flex justify-center">
        <Searchbar />
      </div>
      <h1 className="ml-24 text-3xl font-bold text-accentColor-earthyYellow">
        Available Listings
      </h1>
      {dormListings && <DormCardContainer dormListings={dormListings} />}
    </main>
  );
}
