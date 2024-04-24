"use client";
import { useState } from "react";
import { Searchbar } from "@/components/search/searchbar";
import { DormCard } from "@/components/DormCard";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";

export default function page() {
  const dormListings = [
    { id: 1, name: "Dorm 1" },
    { id: 2, name: "Dorm 2" },
    { id: 3, name: "Dorm 3" },
    { id: 4, name: "Dorm 4" },
  ];

  const [scrollPosition, setScrollPosition] = useState(0);

  const scrollLeft = () => {
    const newPosition = scrollPosition - 800;
    setScrollPosition(Math.max(0, newPosition));
  };

  const scrollRight = () => {
    const newPosition = scrollPosition + 800;
    setScrollPosition(newPosition);
  };

  return (
    <div>
      <div className="flex flex-col flex-grow w-full items-center px-20 gap-12">
        <Searchbar />
      </div>
      <div className="flex flex-col flex-grow w-full items-left pt-12 gap-y-5">
        <h1 className="ml-16 text-3xl text-accentColor-earthyBrown font-semibold">
          Find dorm listings near you!
        </h1>
        {/* Container for scrollable dorm cards */}
        <div className="flex overflow-x-auto scrollbar-hide mb-10">
          {/* Button to scroll left */}
          <button
            className="absolute left-4 bottom-28 transform -translate-y-1/2 z-10 bg-grey-200 rounded-full p-4"
            onClick={scrollLeft}
          >
            <RiArrowLeftSFill
              size={30}
              color="text-content-darkBrown"
              className="absolute pointer-events-none bottom-0 right-0 border-[1px] rounded-lg border-content-darkBrown bg-content-white font-semibold text-xl text-content-darkBrown shadow-md"
            />
          </button>
          {/* Dorm card container */}
          <div
            className="flex space-x-10 px-8 py-2"
            style={{ minWidth: "100%", marginLeft: `-${scrollPosition}px` }}
          >
            {/* Mapping dorm listings to DormCard components */}
            {dormListings.map((dorm) => (
              <DormCard key={dorm.id} />
            ))}
          </div>
          {/* Button to scroll right */}
          <button
            className="absolute right-4 bottom-24 transform -translate-y-1/2 z-10 bg-grey-200 rounded-full p-4"
            onClick={scrollRight}
          >
            <RiArrowRightSFill
              size={30}
              color="text-content-darkBrown"
              className="absolute pointer-events-none bottom-0 right-0 border-[1px] rounded-lg border-content-darkBrown bg-content-white font-semibold text-xl text-content-darkBrown shadow-md"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
