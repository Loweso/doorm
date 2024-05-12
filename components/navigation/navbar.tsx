"use client";
import Image from "next/image";
import Link from "next/link";
import { IoEyeSharp } from "react-icons/io5";
import { GoPencil } from "react-icons/go";
import { userStore } from "@/store/userStore";

export const Navbar = () => {
  const user = userStore((state) => state.user);
  const { clearUser } = userStore();
  const logout = () => {
    clearUser();
    window.open("http://localhost:5000/logout", "_self");
  };

  return (
    <nav className="flex w-full p-3 items-center border-b-[1px] text-content-darkBrown font-semibold bg-content-white ">
      <div className="ml-6">
        <Link href="/">
          <Image
            src="/logo/doorm.png"
            width={100}
            height={50}
            alt="Doorm Logo"
          />
        </Link>
      </div>
      <ul className="ml-auto flex space-x-8 mr-6">
        <li className="flex items-center py-2 px-3 border-[1px] rounded-lg bg-accentColor-earthyBrown bg-opacity-35">
          <Link href="/listing" className="flex gap-x-1">
            <IoEyeSharp size={25} />
            View Dorms
          </Link>
        </li>

        {user && (
          <>
            <li className="flex items-center py-2 px-3 border-[1px] rounded-lg bg-accentColor-earthyYellow bg-opacity-35">
              <Link href="/listing/new" className="flex gap-x-1">
                <GoPencil size={25} />
                Create new listing
              </Link>
            </li>

            <li
              className="py-2 px-3 border-[1px] rounded-lg bg-accentColor-earthyBlue bg-opacity-35 cursor-pointer"
              onClick={logout}
            >
              Logout
            </li>
            <Link href={`/user/${user.user_ID}`}>
              <div className="rounded-full w-10 h-10 overflow-hidden">
                <Image
                  src={user.profilePicture}
                  width={100}
                  height={50}
                  alt="Doorm Logo"
                />
              </div>
            </Link>
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
