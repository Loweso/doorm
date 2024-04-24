import { DormCard } from "./DormCard";
import { FaHouse } from "react-icons/fa6";

export const DormCardContainer = () => {
  return (
    <div className="grid grid-cols-3 place-items-center ps-16 pe-16 pb-12 gap-y-10 ">
      <DormCard />
      <DormCard />
      <DormCard />
      <DormCard />
      <DormCard />
      <DormCard />
      <h1 className="col-span-3 text-content-darkBrown font-semibold text-lg flex items-baseline gap-x-1 cursor-pointer">
        <FaHouse />
        More Dorms
      </h1>
    </div>
  );
};
