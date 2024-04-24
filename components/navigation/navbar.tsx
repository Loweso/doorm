"use client";
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { userStore } from "@/store/userStore";

const links = [
  { name: "View Dorms", linkto: "/listing", isDorm: true },
  { name: "Create new listing", linkto: "/listing/new", isListing: true },
];

export const Navbar = () => {
  const user = userStore((state) => state.user);
  const logout = () => {
    window.open("http://localhost:5000/logout", "_self");
  };

  return (
    <nav className="flex w-full p-3 items-center border-b-[1px] text-content-darkBrown font-semibold bg-content-white ">
      <div className="ml-6">
        <Image src="/logo/doorm.png" width={100} height={50} alt="Doorm Logo" />
      </div>
      <ul className="ml-auto flex space-x-8 mr-6">
        {links.map((link, index) => {
          return (
            <li
              key={index}
              className={`flex items-center ${
                link.isDorm || link.isListing
                  ? "py-2 px-3 border-[1px] rounded-lg"
                  : ""
              }
              ${link.isDorm ? "bg-accentColor-earthyBrown bg-opacity-35" : ""}
              ${
                link.isListing
                  ? "bg-accentColor-earthyYellow bg-opacity-35"
                  : ""
              }`}
            >
              <Link href={link.linkto} className="flex gap-x-1">
                {link.isDorm && <IoEyeSharp size={25} />}
                {link.isListing && <GoPencil size={25} />}
                {link.name}
              </Link>
            </li>
          );
        })}
        {user && (
          <>
            <li
              className="py-2 px-3 border-[1px] rounded-lg bg-accentColor-earthyBlue bg-opacity-35 cursor-pointer"
              onClick={logout}
            >
              Logout
            </li>
            <div className="rounded-full w-10 h-10 overflow-hidden">
              <Image
                src={user.profilePicture}
                width={100}
                height={50}
                alt="Doorm Logo"
              />
            </div>
          </>
        )}
        {!user && (
          <li className="py-2 px-3 border-[1px] rounded-lg bg-accentColor-earthyBlue bg-opacity-35">
            <Link href="/auth" className="flex gap-x-1">
              Sign in
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
