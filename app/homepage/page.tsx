"use client";
import { Searchbar } from "@/components/search/searchbar";
import { DormCard } from "@/components/DormCard";

export default function page() {
  return (
    <div className="flex flex-col flex-grow w-full items-center px-20 gap-12">
      <Searchbar />
      <DormCard />
    </div>
  );
}
