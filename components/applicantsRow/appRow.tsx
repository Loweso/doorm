import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const AppRow = () => {
  return (
    <div className="flex flex-row">
      <div className="w-1/3 h-full flex flex-col items-center m-2">
        <div className=" w-full h-10 bg-[#EFEBE3] rounded"> </div>
      </div>
      <div className="w-1/3 h-full flex flex-col items-center m-2">
        <div className="w-full h-10 bg-[#EFEBE3] rounded"> </div>
      </div>
      <div className="w-1/3 h-full flex items-center justify-evenly m-2 gap-2">
        <button className="w-2/5 h-10 bg-[#8CB9BD] flex justify-center items-center rounded hover:bg-[#7FA5A8]">
          <FaCheck color="white" className="w-9 h-9 " />{" "}
        </button>
        <button className="w-2/5 h-10 bg-[#B67352] flex justify-center items-center rounded hover:bg-[#8E5A41]">
          <ImCross color="white" className="w-8 h-8 " />{" "}
        </button>
      </div>
    </div>
  );
};
export default AppRow;
