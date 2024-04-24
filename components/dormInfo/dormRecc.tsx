import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";

export const DormRecc = () => {
  return (
    <div className="flex h-[40vh] w-3/4 rounded-2xl p-6 border-[1px] shadow-lg">
      <Image
        src="/shrekid.jpg"
        height={300}
        width={300}
        alt="No image"
        className="w-1/3 h-full rounded-lg"
      />
      <div className="flex flex-col w-2/3 h-full p-6 justify-between">
        <p className="text-3xl font-semibold">Shrek&apos;s Shrexy Swamp</p>
        <div>
          <p>Property Type</p>
          <p>Location</p>
          <p>Price Range</p>
          <p className="flex justify-between">
            Date Posted
            <span className="justify-between">Availability</span>
          </p>
        </div>
      </div>
      <button className="flex items-center h-10 p-2">
        <IoShareSocialOutline className="h-8 w-6" />
      </button>
      <button className="flex items-center h-10 p-2">
        <IoHeartOutline className="h-8 w-6" />
      </button>
    </div>
  );
};
