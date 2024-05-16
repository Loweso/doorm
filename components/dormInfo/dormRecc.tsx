import axios from "axios";
import { useState, useEffect } from "react";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";
import { IoShareSocialOutline } from "react-icons/io5";
import Link from "next/link";

interface Props {
  dormId: string;
}
export const DormRecc: React.FC<Props> = ({ dormId }) => {
  const [dormInfo, setDormInfo] = useState<any>(null);

  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/listing/${dormId}`
        );
        setDormInfo(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, [dormId]);

  return (
    <Link
      href={`http://localhost:3000/listing/${dormId}`}
      className="flex h-[40vh] w-3/4"
    >
      <div className="flex h-full w-full rounded-2xl p-6 border-[1px] shadow-lWg hover:bg-[#EDE8DF]">
        <Image
          src={dormInfo?.room_image ? dormInfo.room_image : "/shrekid.jpg"}
          height={300}
          width={300}
          alt="No image"
          className="w-1/3 h-full rounded-lg"
        />
        <div className="flex flex-col w-2/3 h-full p-6 justify-between">
          <p className="text-3xl font-semibold">
            {dormInfo && dormInfo.listingName}
          </p>
          <div>
            <p>{dormInfo && dormInfo.rentType.toUpperCase()}</p>
            <p>{dormInfo && dormInfo.address}</p>
            <p>Price Range</p>
            <p className="flex justify-between">
              {dormInfo && dormInfo.createdAt}
              <span className="justify-between">
                {dormInfo && dormInfo.availability.toUpperCase()}
              </span>
            </p>
          </div>
        </div>
        <button className="flex items-center h-10 p-2">
          <IoShareSocialOutline className="h-8 w-6" />
        </button>
        <button className="flex items-center h-10 p-2">
          <IoHeartOutline className="h-8 w-6" />
        </button>
      </div>
    </Link>
  );
};
