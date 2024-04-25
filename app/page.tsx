"use client";
import { useState } from "react";
import Image from "next/image";
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
    const newPosition = scrollPosition - 1000;
    setScrollPosition(Math.max(0, newPosition));
  };

  const scrollRight = () => {
    const newPosition = scrollPosition + 1000;
    setScrollPosition(newPosition);
  };

  return (
    <div>
      <div className="flex justify-center gap-12">
        <Searchbar />
      </div>
      <div className="flex flex-col flex-grow w-full items-left pt-12 gap-y-5">
        <h1 className="ml-16 text-3xl text-accentColor-earthyBrown font-semibold">
          Find dorm listings near you!
        </h1>

        {/* Container for scrollable dorm cards */}
        <div className="flex overflow-x-hidden mb-10">
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
            style={{ minWidth: "125%", marginLeft: `-${scrollPosition}px` }}
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

      <div className="flex justify-center mt-16 gap-x-4 px-12 bg-bgColor">
        <div className="flex flex-col w-11/12 pt-2">
          <div className="flex px-4 pt-4 pb-2">
            <h1 className="text-3xl text-accentColor-earthyBrown font-light">
              About
            </h1>
            <Image
              src="/logo/doorm.png"
              width={100}
              height={50}
              alt="Doorm Logo"
            />
          </div>
          <div className="flex py-4">
            <div className="py-6 px-8 w-3/5 rounded-lg bg-content-white mb-4">
              <h1 className="text-xl text-content-darkBrown font-semibold pb-2">
                Opening dooooors for you...
              </h1>
              <p className="text-content-darkBrown">
                Simplify your dormitory hunting with ’doorm’ by connecting
                students with available listings and allowing property owners to
                easily showcase their spaces. Our user-friendly platform
                streamlines the rental process, making it effortless to find or
                list dormitory accommodations. Join doorm today to simplify your
                dormitory experience.
              </p>
            </div>
            <div className="flex justify-center w-2/5 p-4 rounded-lg bg-content-white ml-10 mb-4">
              <h1 className="text-2xl text-content-darkBrown font-semibold">
                Contributors
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
