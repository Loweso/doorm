"use client";
import { DormCardContainer } from "@/components/DormCardContainer";

export default function page() {
  return (
    <main className="h-full flex flex-col bg-content-white">
      <h1>Available Listings</h1>
      <DormCardContainer />
    </main>
  );
}
