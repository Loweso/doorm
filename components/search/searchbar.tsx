"use client";
import { IoMdArrowDropdown } from "react-icons/io";
import { GiBinoculars } from "react-icons/gi";
import axios from "axios";
import useSearchStore from "@/store/searchStore";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Searchbar = () => {
  const router = useRouter();
  const [filter, setFilter] = useState("name");
  const [text, setText] = useState("");
  const setQuery = useSearchStore((state) => state.setQuery);
  const clearQuery = useSearchStore((state) => state.clearQuery);

  const textChange = (e: any) => {
    setText(e);
  };

  const filterChange = (e: any) => {
    setFilter(e.target.value);
  };

  const handleSubmit = () => {
    clearQuery();
    setQuery({ [filter]: text });
    setText("");
    router.push("/listing");
  };

  return (
    <div className="w-1/2 mt-12 flex gap-x-4">
      <div className="relative w-2/3 p-2 rounded-lg bg-content-white border-[1px] shadow-md">
        <div className="flex flex-col w-4/5 pl-1 ">
          <label
            htmlFor="searchResult"
            className="text-xs text-content-darkBrown font-semibold"
          >
            Search locations, name...
          </label>
          <input
            type="text"
            id="searchResult"
            name="searchResult"
            value={text}
            onChange={(e) => textChange(e.target.value)}
            placeholder="E.g. Lahug, dormy..."
            className="rounded px-2 py-1 mt-1 bg-bgColor text-content-darkBrown font-medium"
          />
        </div>

        <GiBinoculars
          size={50}
          color="white"
          className="absolute z-10 cursor-pointer bottom-2 right-2 border-[1px] w-1/6 rounded-lg border-content-darkBrown bg-accentColor-lightBlue font-semibold text-xl text-content-white shadow-md"
          onClick={handleSubmit}
        />
      </div>

      <div className="relative flex w-1/3 p-2 rounded-lg bg-bgColor border-[1px] shadow-md">
        <div className="relative flex-col">
          <label
            htmlFor="filterResult"
            className="px-2 py-1 text-lg text-content-darkBrown font-semibold"
          >
            Filters:
          </label>
          <select
            name="filterResult"
            id="filterResult"
            className="rounded px-1 bg-bgColor w-full cursor-pointer"
            value={filter}
            onChange={filterChange}
          >
            <option value="name">Name</option>
            <option value="address">Address</option>
            <option value="amenity">Amenity</option>
          </select>

          <IoMdArrowDropdown
            size={30}
            color="white"
            className="absolute pointer-events-none bottom-1 right-1 border-[1px] rounded-lg border-content-darkBrown bg-accentColor-lightBlue font-semibold text-xl text-content-white shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
