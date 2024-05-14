interface DormInfo {
  user_ID?: string | null;
  listingName: string;
  rentType: string;
  address: string;
  availability: string;
  description: string;
  rent: number;
  room_image?: string;
  createdAt: string;
  user_email: string;
  user_fullName: string;
  user_contactNo: string;
  features: string[];
}

interface Props {
  dormInfo: DormInfo;
}

export const DormApply: React.FC<Props> = ({ dormInfo }) => {
  return (
    <div className="flex h-[10vh] w-3/4 justify-around">
      <div className="w-1/2 flex flex-col font-semibold">
        Negotiate Price (in PHP):
        <input
          type="number"
          min={dormInfo.rent}
          step="1000"
          className="rounded-xl p-3"
        />
      </div>
      <button className="w-1/3 p-3 font-semibold text-xl rounded-xl bg-[#B65E52]/[.5] hover:bg-[#B65E52]/[.65]">
        Apply for Listing
      </button>
    </div>
  );
};
