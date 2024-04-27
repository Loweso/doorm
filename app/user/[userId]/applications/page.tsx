import { DormCardContainer } from "@/components/DormCardContainer";
import React from "react";

function Applications({ params }) {
  return (
    <main className=" flex flex-col bg-content-white space-y-12">
      <h1 className="mt-12 ml-24 text-3xl font-bold text-accentColor-earthyYellow">
        Your Applications
      </h1>
      <DormCardContainer />
    </main>
  );
}

export default Applications;
