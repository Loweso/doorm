"use client";
import { Forms } from "@/components/forms/forms";
import { userStore } from "@/store/userStore";

export default function page({
  params,
}: {
  params: {
    dormId: string;
  };
}) {
  const user = userStore((state) => state.user);
  return (
    user && (
      <div className="flex justify-center">
        <Forms />
      </div>
    )
  );
}
