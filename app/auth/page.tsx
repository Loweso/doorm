"use client";
import supabaseBrowserClient from "@/utils/supabase/client";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const loginWithGoogle = () => {
    const supabase = supabaseBrowserClient();
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: location.origin + "auth/callback",
      },
    });
  };

  return (
    <div className="h-screen bg-bgColor flex flex-col justify-between ">
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
      <footer className="border-t-[1px] bg-accentColor-lightBlue bg-opacity-50 p-4 font-semibold  text-content-darkBrown  flex ">
        <span className="ml-8 ">CMSC 127 A Final Project</span>
        <span className="ml-16">&#169; Est. 2024</span>
        <div className="ml-auto absolute right-10 bottom-2">
          <Image
            src="/logo/doorm.png"
            width={100}
            height={50}
            alt="Doorm Logo"
          />
        </div>
      </footer>
    </div>
  );
}
