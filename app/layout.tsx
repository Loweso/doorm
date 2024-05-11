"use client";

import { useRouter } from "next/navigation";
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
      }
    };
    fetchUser();
  }, [setUser]);

  /*  if (!user && !["/listing", "/auth", "/"].includes(pathname)) {
    router.push("/auth");
    return null;
  } else if (user && ["/auth"].includes(pathname)) {
    router.push("/");
    return null;
  }
 */

  return (
    <html lang="en">
      <body className={`${poppins} bg-content-white`}>
        {pathname == "/auth" ? null : <Navbar />}
        {children}
        <FooterCom />
      </body>
    </html>
  );
}
