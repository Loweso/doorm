export const DormApply = () => {
  return (
    <div className="flex h-[10vh] w-3/4 justify-around">
      <div className="w-1/2 flex flex-col font-semibold">
        Negotiate Price (in PHP):
        <input type="number" min="0.0" step="1" className="rounded-xl p-3" />
      </div>
      <button className="w-1/3 p-3 font-semibold text-xl rounded-xl bg-[#B65E52]/[.5] hover:bg-[#B65E52]/[.65]">
        Apply for Listing
      </button>
    </div>
  );
};
