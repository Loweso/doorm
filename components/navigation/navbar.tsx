"use client";
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { GoPencil } from "react-icons/go";

const links = [
  { name: "View Dorms", linkto: "/", isDorm: true },
  { name: "Create new listing", linkto: "/listing/new", isListing: true },
  { name: "Sign in", linkto: "/auth", isSign: true },
];

export const Navbar = () => {
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
      </ul>
    </nav>
  );
};
