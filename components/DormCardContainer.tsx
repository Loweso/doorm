import axios from "axios";
import { useState, useEffect } from "react";
import { DormCard } from "./DormCard";
import { FaHouse } from "react-icons/fa6";

export const DormCardContainer = () => {
  const [dormListings, setDormListings] = useState<any>(null);

  useEffect(() => {
    const fetchDormInfo = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/listing/read/`);
        setDormListings(response.data);
      } catch (error) {
        console.error("Error fetching dorm information:", error);
      }
    };

    fetchDormInfo();
  }, []);
  return (
    <div className="grid grid-cols-3 place-items-center ps-16 pe-16 pb-12 gap-y-10 ">
      {dormListings &&
        dormListings.map((dorm: any) => (
          <DormCard key={dorm.id} dormId={dorm.dormId} />
        ))}
      <h1 className="col-span-3 text-content-darkBrown font-semibold text-lg flex items-baseline gap-x-1 cursor-pointer">
        <FaHouse />
        More Dorms
      </h1>
    </div>
  );
};
