import Image from "next/image";

export const FooterCom = () => {
  return (
    <footer className="mt-auto border-t-[1px] bg-accentColor-lightBlue bg-opacity-50 font-semibold  text-content-darkBrown  flex items-center p-2 ">
      <span className="ml-8 ">CMSC 127 A Final Project</span>
      <span className="ml-16">&#169; Est. 2024</span>
      <div className="ml-auto ">
        <Image src="/logo/doorm.png" width={100} height={50} alt="Doorm Logo" />
      </div>
    </footer>
  );
};
