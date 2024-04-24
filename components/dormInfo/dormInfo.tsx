import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";

export const DormInfo = () => {
  return (
    <div className="flex flex-col w-3/4 bg-[#FFFFFF] rounded-2xl border-[1px] break-words shadow-lg">
      <div className="h-[50vh] w-full rounded-2xl bg-[#EFEBE3] border-b-[1px]">
        <div className="flex h-[40vh] w-full rounded-2xl bg-[#FFFFFF] p-6 border-b-[1px]">
          <Image
            src="/shrekid.jpg"
            height={300}
            width={300}
            alt="No image"
            className="w-1/3 h-full rounded-lg"
          />
          <div className="flex flex-col justify-between w-2/3 h-full p-6 items-between">
            <p className="text-3xl font-semibold">Shrek&apos;s Shrexy Swamp</p>
            <p className="flex justify-between">
              Date Posted: 01-03-04
              <span className="justify-between">Availability</span>
            </p>
          </div>
          <button className="flex items-center h-10 p-2">
            <IoShareSocialOutline className="h-8 w-6" />
          </button>

          <button className="flex items-center h-10 p-2">
            <IoHeartOutline className="h-8 w-6" />
          </button>
        </div>
        <div className="flex items-center justify-around p-6">
          <button className="text-xl font-semibold hover:text-[#6D5D55]">
            Info
          </button>
          <button className="text-xl font-semibold hover:text-[#6D5D55]">
            Photos
          </button>
          <button className="text-xl font-semibold hover:text-[#6D5D55]">
            Reviews
          </button>
        </div>
      </div>
      <div className="flex flex-col p-12 gap-6">
        <p className="text-xl font-semibold">Description</p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          congue urna a sem congue, dignissim dapibus neque suscipit. Maecenas
          consectetur tempus lacus eget pulvinar. Nulla dignissim, nulla in
          ultricies gravida, ipsum mi posuere neque, consequat suscipit diam
          mauris vitae leo. Suspendisse potenti. Nulla iaculis volutpat tempor.
          Sed maximus ante vel ornare tempor. Proin tincidunt nulla a metus
          ultricies, nec sodales turpis varius.
        </p>
        <p>
          <span className="text-xl font-semibold">Property Type</span>
          &nbsp; Type
        </p>
        <p>
          <span className="text-xl font-semibold">Location</span>
          &nbsp; Location
        </p>
        <p>
          <span className="text-xl font-semibold">Price</span>
          &nbsp; Price
        </p>
        <p className="text-xl font-semibold">Amenities</p>
        <p className="ml-[2vw]">
          Amenities
          <br />
          Amenities
          <br />
          Amenities
        </p>
        <p className="text-xl font-semibold">Contact Person</p>
        <p className="ml-[2vw]">
          Shrek the Third
          <br />
          0927-SHREX-0101
          <br />
          shrexy69@gmail.com.uk
        </p>
      </div>
    </div>
  );
};
