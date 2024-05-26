// app/not-found.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/");
  }, [router]);

  return <div>Redirecting...</div>; // Optionally, show a message while redirecting
}
