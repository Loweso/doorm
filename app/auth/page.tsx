"use client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const loginWithGoogle = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  return (
    <div className="h-full bg-bgColor flex flex-col justify-between ">
      <div className="flex-grow flex justify-center items-center">
        <div className="w-[25%] h-[40%] rounded-xl border-[1px] border-black bg-accentColor-lightBlue bg-opacity-40 flex flex-col space-y-8 pt-14 shadow-lg">
          <div className="flex justify-center">
            <Image
              src="/logo/doorm.png"
              width={180}
              height={200}
              alt="Doorm Logo"
            />
          </div>
          <div className="flex justify-center">
            <button
              className="w-[80%] bg-bgColor bg-opacity-60 rounded-md p-2 space-x-10 text-center flex hover:bg-opacity-90"
              onClick={loginWithGoogle}
            >
              <FcGoogle size={25} className="ml-1" />
              <span className="font-medium text-content-darkBrown">
                Sign in with Google
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
