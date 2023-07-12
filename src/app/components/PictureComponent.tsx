"use client";
import React, { ChangeEvent, useRef, useState } from "react";
import { ArrowUpIcon, ArrowDownCircleIcon } from "@heroicons/react/24/outline";
import { BiUser } from "react-icons/bi";

interface PictureComponentProps {
  onInputChange: (newInputValues: File | null) => void;
}

const PictureComponent: React.FC<PictureComponentProps> = ({
  onInputChange,
}) => {
  const [profilePic, setProfilepic] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const pic = e.target.files[0];

      setProfilepic(pic);
      onInputChange(pic);
      console.log(profilePic);
    }
    return;
  };

  const handleClick = () => {
    setProfilepic(null);
    onInputChange(null);
  };

  return (
    <div className="max-w-xl shadow-xl shadow-gray-200 ">
      <div className="rounded-xl bg-white  ring ring-indigo-50 ">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form className="flex items-center space-x-6">
              <div className="shrink-0">
                <img
                  className="h-16 w-16 object-cover rounded-full"
                  src={profilePic ? URL.createObjectURL(profilePic) : ""}
                  alt=""
                />
              </div>
              <label className="block">
                <span className="sr-only">Choose profile photo</span>
                <input
                  type="file"
                  onChange={handleChange}
                  className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                />
              </label>
            </form>
            <button
              className="rounded-xl bg-indigo-500 text-white font-semibold p-2 m-2 hover:bg-indigo-400 mt-4"
              onClick={handleClick}
            >
              Remove Picture
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureComponent;
