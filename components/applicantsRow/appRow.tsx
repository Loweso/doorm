"use client";
import React from "react";
import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import axios from "axios";

interface Application {
  User: { fullName: string };
  rent: number;
  status: string;
  user_ID: string;
  dormId: string;
}

interface AppRowProps {
  application: Application;
}

const AppRow: React.FC<AppRowProps> = ({ application }) => {
  const [decision, setDecision] = useState<any>("");
  const [status, SetStatus] = useState({
    user_ID: application.user_ID,
    rent: application.rent,
    decision: "",
    dormId: application.dormId,
  });

  const acceptApplication = () => {
    SetStatus((prevStatusInfo) => ({
      ...prevStatusInfo,
      decision: "accepted",
    }));
    setDecision("accepted");
  };

  const rejectApplication = () => {
    SetStatus((prevStatusInfo) => ({
      ...prevStatusInfo,
      decision: "rejected",
    }));
    setDecision("rejected");
  };

  const updateApplication = async () => {
    try {
      await axios.put(
        `http://localhost:5000/listing/${application.dormId}/applications`,
        status
      );
      SetStatus((prevStatusInfo) => ({
        ...prevStatusInfo,
        decision: "",
      }));
      window.location.reload();
      console.log("Successfully updated application!");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (status.decision) {
      updateApplication();
    }
  }, [status.decision]);

  return (
    <div className="flex flex-row">
      <div className="w-1/3 h-full flex flex-col items-center m-2">
        <div className=" w-full h-10 bg-[#EFEBE3] rounded flex justify-center items-center">
          {" "}
          {application.User.fullName}{" "}
        </div>
      </div>
      <div className="w-1/3 h-full flex flex-col items-center m-2">
        <div className="w-full h-10 bg-[#EFEBE3] rounded flex justify-center items-center">
          {" "}
          {application.rent}{" "}
        </div>
      </div>
      {application && application.status === "Pending" && decision == "" && (
        <div className="w-1/3 h-full flex items-center justify-evenly m-2 gap-2">
          <button
            className="w-2/5 h-10 bg-[#8CB9BD] flex justify-center items-center rounded hover:bg-[#7FA5A8]"
            onClick={acceptApplication}
          >
            <FaCheck color="white" className="w-9 h-9 " />{" "}
          </button>
          <button
            className="w-2/5 h-10 bg-[#B67352] flex justify-center items-center rounded hover:bg-[#8E5A41]"
            onClick={rejectApplication}
          >
            <ImCross color="white" className="w-8 h-8 " />{" "}
          </button>
        </div>
      )}
      {decision === "accepted" && (
        <div className="w-1/3 h-full flex items-center justify-evenly m-2 gap-2 font-semibold text-content-darkBrown">
          Accepted
        </div>
      )}
      {decision === "rejected" && (
        <div className="w-1/3 h-full flex items-center justify-evenly m-2 gap-2 font-semibold text-content-darkBrown">
          Rejected
        </div>
      )}

      {application && application.status === "accepted" && (
        <div className="w-1/3 h-full flex items-center justify-evenly m-2 gap-2 font-semibold text-content-darkBrown">
          Accepted
        </div>
      )}
      {application && application.status === "rejected" && (
        <div className="w-1/3 h-full flex items-center justify-evenly m-2 gap-2 font-semibold text-content-darkBrown">
          Rejected
        </div>
      )}
    </div>
  );
};
export default AppRow;
