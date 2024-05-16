import React from "react";
import Image from "next/image";
import Link from "next/link";

export const About = () => {
  const images = [
    {
      photo: "/renier.jpg",
      github: "https://github.com/renierjardio",
    },
    { photo: "/bettina.jpg", github: "https://github.com/bttnlight" },
    {
      photo: "/louise.jpg",
      github: "https://github.com/Loweso",
    },
    { photo: "/arwin.jpg", github: "https://github.com/arwin50" },
  ];
  return (
    <div className="flex justify-center gap-x-4 px-12 bg-bgColor">
      <div className="flex flex-col w-11/12 pt-2">
        <div className="flex px-4 pt-4 pb-2">
          <h1 className="text-3xl text-accentColor-earthyBrown font-light">
            About
          </h1>
          <Image
            src="/logo/doorm.png"
            width={100}
            height={50}
            alt="Doorm Logo"
          />
        </div>
        <div className="flex py-4">
          <div className="py-6 px-8 w-3/5 rounded-lg bg-content-white mb-4">
            <h1 className="text-xl text-content-darkBrown font-semibold pb-2">
              Opening dooooors for you...
            </h1>
            <p className="text-content-darkBrown">
              Simplify your dormitory hunting with ’doorm’ by connecting
              students with available listings and allowing property owners to
              easily showcase their spaces. Our user-friendly platform
              streamlines the rental process, making it effortless to find or
              list dormitory accommodations. Join doorm today to simplify your
              dormitory experience.
            </p>
          </div>
          <div className="flex flex-col items-center w-2/5 p-4 rounded-lg bg-content-white ml-10 mb-4">
            <h1 className="text-2xl text-content-darkBrown font-semibold">
              Contributors
            </h1>
            <div className="flex space-x-7 justify-center items-center h-full">
              {images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="rounded-full overflow-hidden w-16 h-16 cursor-pointer hover:opacity-70  border"
                  >
                    <Link href={image.github}>
                      <Image
                        src={image.photo}
                        width={1125}
                        height={1500}
                        alt="Doorm Logo"
                        className="w-full h-full"
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
