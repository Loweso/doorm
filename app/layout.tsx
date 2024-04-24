"use client";

import { Navbar } from "@/components/navigation/navbar";
import { usePathname } from "next/navigation";
import "./globals.css";
import { poppins } from "./fonts";
import { FooterCom } from "@/components/footer";
import { userStore } from "@/store/userStore";
import { useEffect } from "react";
import axios from "axios";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const setUser = userStore((state) => state.setUser);

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
      }
    };
    fetchUser();
  }, [setUser]);

  return (
    <html lang="en">
      <body className={`${poppins} bg-bgColor`}>
        {pathname == "/auth" ? null : <Navbar />}
        {children}
        <FooterCom />
      </body>
    </html>
  );
}
