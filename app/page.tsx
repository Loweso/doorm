"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Searchbar } from "@/components/search/searchbar";
import { DormCard } from "@/components/DormCard";
import { RiArrowLeftSFill, RiArrowRightSFill } from "react-icons/ri";
import { About } from "@/components/About";

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollYeet, setScrollYeet] = useState(false);

  const scrollLeft = () => {
    const newPosition = scrollPosition - 1050;
    setScrollPosition(Math.max(0, newPosition));
    setScrollYeet(!scrollYeet);
  };

  const scrollRight = () => {
    const newPosition = scrollPosition + 1050;
    setScrollPosition(newPosition);
    setScrollYeet(!scrollYeet);
  };

  const [dormListings, setDormListings] = useState<any>(null);

  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/listing/read/`);
        setDormListings(response.data.slice(0, 7));
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, []);

  return (
    <div className="space-y-8">
      <div className="flex justify-center gap-12">
        <Searchbar />
      </div>
      <div className="flex flex-col flex-grow w-full items-left pt-12 gap-y-5">
        <h1 className="ml-12 text-3xl text-accentColor-earthyBrown font-semibold">
          Find dorm listings near you!
        </h1>

        {/* Container for scrollable dorm cards */}
        <div className="flex mb-10 overflow-x-hidden ">
          {/* Button to scroll left */}
          {scrollYeet && (
            <button
              className="absolute left-4 bottom-44 transform -translate-y-1/2 z-10 bg-grey-200 rounded-full p-4"
              onClick={scrollLeft}
            >
              <RiArrowLeftSFill
                size={30}
                color="text-content-darkBrown"
                className="absolute pointer-events-none bottom-0 right-0 border-[1px] rounded-lg border-content-darkBrown bg-content-white font-semibold text-xl text-content-darkBrown shadow-md"
              />
            </button>
          )}
          {/* Dorm card container */}
          <div
            className="flex space-x-10 px-8 py-4 transition-transform duration-300"
            style={{
              minWidth: "200%",
              transform: `translateX(-${scrollPosition}px)`,
            }}
          >
            {/* Mapping dorm listings to DormCard components */}
            {dormListings &&
              dormListings.map((dorm: any, index: any) => (
                <Link href={`/listing/${dorm.dormId}`} key={index}>
                  <DormCard dormcardinfo={dorm} />
                </Link>
              ))}
          </div>
          {/* Button to scroll right */}
          {!scrollYeet && dormListings && dormListings.length > 4 && (
            <button
              className="absolute right-4 bottom-44 transform -translate-y-1/2 z-10 bg-grey-200 rounded-full p-4"
              onClick={scrollRight}
            >
              <RiArrowRightSFill
                size={30}
                color="text-content-darkBrown"
                className="absolute pointer-events-none bottom-0 right-0 border-[1px] rounded-lg border-content-darkBrown bg-content-white font-semibold text-xl text-content-darkBrown shadow-md"
              />
            </button>
          )}
        </div>
      </div>
      <About />
    </div>
  );
}
