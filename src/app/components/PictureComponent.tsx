"use client";
import { on } from "events";
import React, { useState } from "react";

interface PictureComponentProps {
  onInputChange: (newInputValues: File | null) => void;
  profilePic: File | null;
  profilePicSize: number | null;
  setProfilePicSize: React.Dispatch<React.SetStateAction<number>>;
}

const PictureComponent: React.FC<PictureComponentProps> = ({
  onInputChange,
  setProfilePicSize,
  profilePic,
  profilePicSize,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const pic = e.target.files[0];

      onInputChange(pic);
      console.log(pic);
    }
    return;
  };

  const handleClick = () => {
    onInputChange(null);
  };
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderValue = parseInt(event.target.value);
    setSliderValue(newSliderValue);
    setProfilePicSize(newSliderValue);
    // profilePicSize = newSliderValue;
    // console.log(profilePicSize);
    // onSizeChange(profilePicSize);
  };

  return (
    <div className="max-w-xl shadow-xl shadow-gray-200 ">
      <div className="rounded-xl bg-white  ring ring-indigo-50 ">
        <div className="px-12 pt-6 -mb-6 text-xl text-[#07074D]">Pictures</div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form className="flex items-center space-x-6">
              <div className="mx-auto">
                <img
                  className="max-h-64 rounded-md "
                  src={
                    profilePic
                      ? URL.createObjectURL(profilePic)
                      : "https://images.unsplash.com/photo-1516724562728-afc824a36e84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                  }
                  alt=""
                />
                <label className="block">
                  <input
                    type="file"
                    onChange={handleChange}
                    className="block my-4 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700  hover:file:bg-violet-100 "
                  />
                </label>
              </div>
            </form>
            <div className="flex flex-col m-10">
              <input
                type="range"
                min={64}
                max={240}
                step={8}
                value={sliderValue}
                onChange={handleSliderChange}
                className="cursor-pointer"
              />
              <button
                className="rounded-xl bg-indigo-500 text-white font-semibold p-2 m-2 hover:bg-indigo-400 mt-4 max-w-[40%]"
                onClick={handleClick}
              >
                Remove Picture
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureComponent;
