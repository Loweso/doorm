"use client";
import { Forms } from "@/components/forms/forms";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
export default function page() {
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  return (
    <div className="flex justify-center">
      <Forms />
    </div>
  );
}
