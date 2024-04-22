"use client";

import { Navbar } from "@/components/navigation/navbar";
import { usePathname } from "next/navigation";
import "./globals.css";
import { poppins } from "./fonts";
import { FooterCom } from "@/components/footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
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
