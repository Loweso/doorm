"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiEdit3 } from "react-icons/fi";
import { userStore } from "@/store/userStore";
import AppRow from "@/components/applicantsRow/appRow";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = ({
  params,
}: {
  params: {
    dormId: string;
  };
}) => {
  const user = userStore((state) => state.user);
  const [applications, setApplications] = useState([]);
  const router = useRouter();
  const [dormInfo, setDormInfo] = useState<any>(null);

  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/listing/${params.dormId}`
        );
        console.log(response.data);
        setDormInfo(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, [params.dormId]);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/listing/${params.dormId}/applications`
        );
        console.log(response.data);
        setApplications(response.data);
      } catch (error) {
        console.error("Failed to fetch applications: ", error);
      }
    };

    fetchApplications();
  }, [params.dormId]);

  return (
    user &&
    dormInfo && (
      <div className="flex flex-row justify-center items-center bg-[#FEFBF6] p-20">
        <div className="w-5/6 bg-[#ECB159] border-[1px] rounded-lg border-gray-800">
          <div className="h-4/6 bg-[#EFEBE3] border-b-[1px] rounded-lg border-gray-800 flex flex-col justify-center items-center">
            <div className="w-full h-5/6 bg-[#FEFBF6] border-b-[1px] rounded-lg border-gray-800 flex flex-row justify-center items-center">
              <div className="w-1/2 rounded-lg flex justify-center items-center p-12">
                <Image
                  src={dormInfo.room_image}
                  width={500}
                  height={500}
                  alt="No image"
                  className="w-full h-full border-[1px] rounded-lg border-gray-800"
                />
              </div>
              <div className="w-1/2 h-full rounded-lg flex justify-center items-start flex-col gap-8 pr-12">
                <h1 className="w-full text-3xl text-[#4E423B] font-semibold break-words">
                  {dormInfo.listingName}
                </h1>
                <div className="w-full h-1/3 flex justify-start items-center flex-row gap-4">
                  <Link href={`/listing/${params.dormId}/`}>
                    <button className="w-44 h-12 bg-[#ECB159] bg-opacity-35 border-[1px] rounded-lg border-gray-800 flex justify-center items-center hover:bg-[#CCB89A] gap-2">
                      <FiEdit3 color="#4E423B" className="w-4 h-4 " />
                      <p className="text-sm text-[#4E423B] font-normal">
                        View Dorm Listing
                      </p>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="m-2">
              <p className="text-2xl text-[#4E423B] font-semibold">
                {" "}
                List of Applicants{" "}
              </p>
            </div>
          </div>
          <div className="p-8">
            <div className="flex flex-row">
              <div className="w-1/3 h-full flex flex-col items-center m-2">
                <p className="text-base text-[#4E423B] font-semibold">
                  Full Name:
                </p>
              </div>
              <div className="w-1/3 h-full flex flex-col items-center m-2">
                <p className="text-base text-[#4E423B] font-semibold">
                  Price Offer (in Php):
                </p>
              </div>
              <div className="w-1/3 h-full flex flex-col items-center m-2 gap-2">
                <p className="text-base text-[#4E423B] font-semibold">
                  Your Decision:
                </p>
              </div>
            </div>
            {applications.map((app, index) => (
              <AppRow key={index} application={app} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};
export default Page;
