import React from "react";

const MarketingComponent = () => {
  return (
    <div className="max-w-xl shadow-xl shadow-gray-200 rounded-xl bg-white ring ring-indigo-50">
      <div className="px-12 pt-6 -mb-6 text-xl text-[#07074D]">Marketing</div>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <div className="flex flex-col max-w-[30%]">
            <button
              type="button"
              className="text-white bg-indigo-500 hover:bg-indigo-400  font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 "
            >
              Call to action
            </button>
            <button
              type="button"
              className="text-white bg-indigo-500 hover:bg-indigo-400  font-medium rounded-xl text-sm px-5 py-2.5 text-center mb-2 "
            >
              Banner
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingComponent;
