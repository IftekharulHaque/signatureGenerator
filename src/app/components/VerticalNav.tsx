"use client";

import React, { useState } from "react";
import { UserIcon, PhotoIcon } from "@heroicons/react/24/outline";

const VerticalNav = ({
  changeTab,
}: {
  changeTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [isTextsActive, setIsTextsActive] = useState(true);
  const [isPicturesActive, setIsPicturesActive] = useState(false);

  const handleTextsClick = () => {
    setIsTextsActive(true);
    setIsPicturesActive(false);
    console.log("Texts clicked");
    ``;
  };

  const handlePicturesClick = () => {
    setIsTextsActive(false);
    setIsPicturesActive(true);
    console.log("Pictures clicked");
  };
  const handleChangeTab = (tab: string) => {
    changeTab(tab);
  };

  return (
    <div>
      <div className="text-3xl font-semibold pl-64 mb-8 -mt-[10%]">
        My Signature
      </div>
      <div className="flex justify-center ">
        <div className="flex-col flex w-40">
          <button
            className={`flex items-center gap-2 mb-2 border-s-[3px] ${
              isTextsActive
                ? "border-indigo-500 rounded-r-xl bg-indigo-100 text-indigo-700"
                : "border-transparent text-gray-500 rounded-r-xl hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700"
            } px-4 py-3`}
            onClick={() => {
              handleChangeTab("text");
              handleTextsClick();
            }}
          >
            <UserIcon className="w-4" />
            <span className="text-sm font-medium"> Texts </span>
          </button>

          <button
            className={`flex items-center gap-2 mb-2 border-s-[3px] ${
              isPicturesActive
                ? "border-indigo-500 bg-indigo-100 text-indigo-700 rounded-r-xl"
                : "border-transparent text-gray-500 hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700 rounded-r-xl"
            } px-4 py-3`}
            onClick={() => {
              handleChangeTab("picture");
              handlePicturesClick();
            }}
          >
            <PhotoIcon className="w-4" />
            <span className="text-sm font-medium"> Pictures </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerticalNav;
