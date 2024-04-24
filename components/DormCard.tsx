import { PiMapPinFill } from "react-icons/pi";
import { BsPinAngleFill } from "react-icons/bs";

export const DormCard = () => {
  return (
    <div className="w-[18%] h-[55%] bg-[#FFFFFF] bg-opacity-80 rounded-xl overflow-hidden shadow-lg">
      <div className="w-full h-[65%] bg-accentColor-lightBlue"></div>
      <div className="p-3 font-semibold text-content-darkBrown ">
        <p className="text-2xl">Name</p>
        <div className="flex pt-2 justify-between">
          <p className="font-light text-xs italic ">
            by <span>Dorm_Lister</span>
          </p>
          <p className="font-normal items-center text-xs flex gap-x-[1px]">
            <PiMapPinFill size={15} />
            Lahug, Cebu City
          </p>
        </div>
        <div className="flex ps-2 py-2 font-normal text-xs gap-x-6  ">
          <div className="flex items-center gap-x-1">
            <BsPinAngleFill size={10} />
            <span>Amenity</span>
          </div>
          <div className="flex items-center gap-x-1">
            <BsPinAngleFill size={10} />
            <span>Amenity</span>
          </div>
        </div>
      </div>
    </div>
  );
};
