import React from "react";
import { DormInfo } from "@/components/dormInfo/dormInfo";
import { DormApply } from "@/components/dormInfo/dormApply";
import { DormRecc } from "@/components/dormInfo/dormRecc";
import { Searchbar } from "@/components/search/searchbar";

function page({
  params,
}: {
  params: {
    dormId: string;
  };
}) {
  return (
    <div className="flex flex-col flex-grow w-full items-center px-20 pb-20 gap-12">
      <Searchbar />
      <DormInfo dormId={params.dormId} />
      <DormApply />
      <p className="font-semibold text-[#B67352] text-4xl mt-12">
        You might also be interested in...
      </p>
      <DormRecc />
      <DormRecc />
      <button>View More →</button>
    </div>
  );
}

export default page;
