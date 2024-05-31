"use client";

import { useParams, useRouter } from "next/navigation";
import { Navbar } from "@/components/navigation/navbar";
import { usePathname } from "next/navigation";
import "./globals.css";
import { poppins } from "./fonts";
import { FooterCom } from "@/components/footer";
import { userStore } from "@/store/userStore";
import { useEffect } from "react";
import { useState } from "react";

import axios from "axios";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [dormUser, setDormUser] = useState<any>(null);
  const user = userStore((state) => state.user);
  const setUser = userStore((state) => state.setUser);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/usermounted", {
          withCredentials: true,
        });
        console.log("res", response.data[0]);
        setUser(response.data[0]);
      } catch (e) {
        console.log("failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, [setUser]);

  useEffect(() => {
    if (!loading) {
      if (
        !user &&
        (pathname.endsWith(`/edit`) ||
          pathname.endsWith(`/application`) ||
          pathname.endsWith("/new") ||
          pathname.startsWith("/user"))
      ) {
        router.push("/auth");
      } else if (user && pathname === "/auth") {
        router.push("/");
      } else if (user && pathname.startsWith("/user")) {
        const segments = pathname.split("/");
        const userIdFromUrl = segments[2];
        if (userIdFromUrl && userIdFromUrl !== String(user.user_ID)) {
          router.push("/");
        }
      } else if (user && pathname.startsWith("/listing")) {
        const segments = pathname.split("/");
        const dormIdFromUrl = segments[2];
        const fetchDormUser = async () => {
          try {
            const response = await axios.get(
              `http://localhost:5000/listing/${dormIdFromUrl}`
            );
            setDormUser(response.data.user_ID);
          } catch (error) {
            console.error("Error fetching dorm information:", error);
          } finally {
            if (
              dormUser !== String(user.user_ID) &&
              (pathname.endsWith("/applications") || pathname.endsWith("/edit"))
            ) {
              router.push("/");
            }
          }
        };
        fetchDormUser();
      }
    }
  }, [user, loading, router, pathname, dormUser]);

  return (
    <html lang="en">
      <body className={`${poppins} bg-content-white`}>
        {loading ||
        (dormUser !== String(user?.user_ID) &&
          (pathname.endsWith("/applications") ||
            pathname.endsWith("/edit"))) ? (
          <div>Loading...</div>
        ) : (
          <>
            {pathname !== "/auth" && <Navbar />}
            {children}
            <FooterCom />
          </>
        )}
      </body>
    </html>
  );
}
