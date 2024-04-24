"use client";
import { DormCardContainer } from "@/components/DormCardContainer";
import { Searchbar } from "@/components/search/searchbar";

export default function page() {
  return (
    <main className=" flex flex-col bg-content-white space-y-12">
      <div className="flex justify-center">
        <Searchbar />
      </div>
      <h1 className="ml-24 text-3xl font-bold text-accentColor-earthyYellow">
        Available Listings
      </h1>
      <DormCardContainer />
    </main>
  );
}
