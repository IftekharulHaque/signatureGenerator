"use client";
import React, { useState } from "react";

interface PictureComponentProps {
  onProfilePicChange: (newInputValues: File | null) => void;
  onLogoChange: (newInputValues: File | null) => void;
  profilePic: File | null;
  logo: File | null;
  profilePicSize: number | null;
  logoSize: number | null;
  setProfilePicSize: React.Dispatch<React.SetStateAction<number>>;
  setLogoSize: React.Dispatch<React.SetStateAction<number>>;
}

const PictureComponent: React.FC<PictureComponentProps> = ({
  onProfilePicChange,
  onLogoChange,
  setProfilePicSize,
  setLogoSize,
  profilePic,
  logo,
  profilePicSize,
  logoSize,
}) => {
  const handleProfilePicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const pic = e.target.files[0];

      onProfilePicChange(pic);
      console.log(pic);
    }
    return;
  };

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const logoImage = e.target.files[0];

      onLogoChange(logoImage);
      console.log(logoImage);
    }
    return;
  };

  const handleClick = () => {
    onProfilePicChange(null);
    onLogoChange(null);
  };

  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSliderValue = parseInt(event.target.value);
    setSliderValue(newSliderValue);
    setProfilePicSize(newSliderValue);
    setLogoSize(newSliderValue);
  };

  return (
    <div className="max-w-xl shadow-xl shadow-gray-200 ">
      <div className="rounded-xl bg-white  ring ring-indigo-50 ">
        <div className="px-12 pt-6 -mb-3 text-xl text-[#07074D]">Pictures</div>
        {/* For profilepic change */}
        <div>
          <div className="px-12 pt-6 -mb-6 text-lg text-[#07074D]">
            Profile Picture
          </div>

          <div className="flex flex-col items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
              <form className="flex items-center space-x-6">
                <div className="mx-auto">
                  <img
                    className="max-h-32 rounded-md "
                    src={
                      profilePic
                        ? URL.createObjectURL(profilePic)
                        : "data:image/png;base64,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"
                    }
                    alt=""
                  />
                  <label className="block">
                    <input
                      type="file"
                      onChange={handleProfilePicChange}
                      className="block my-4 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700  hover:file:bg-violet-100 "
                    />
                  </label>
                </div>
              </form>
              <div className="flex flex-col mb-5">
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
                  className="rounded-xl bg-indigo-500 text-white font-semibold p-2 m-2  hover:bg-indigo-400 mt-6 max-w-[40%]"
                  onClick={handleClick}
                >
                  Remove Picture
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* For company logo change */}
        <div>
          <div className="px-12 pt-6 -mb-6 text-lg text-[#07074D]">
            Company Logo
          </div>

          <div className="flex flex-col items-center justify-center p-12">
            <div className="mx-auto w-full max-w-[550px]">
              <form className="flex items-center space-x-6">
                <div className="mx-auto">
                  <img
                    className="max-h-32 rounded-md "
                    src={
                      logo
                        ? URL.createObjectURL(logo)
                        : "data:image/png;base64,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"
                    }
                    alt=""
                  />
                  <label className="block">
                    <input
                      type="file"
                      onChange={handleLogoChange}
                      className="block my-4 w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700  hover:file:bg-violet-100 "
                    />
                  </label>
                </div>
              </form>
              <div className="flex flex-col mb-5">
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
                  className="rounded-xl bg-indigo-500 text-white font-semibold p-2 m-2  hover:bg-indigo-400 mt-6 max-w-[40%]"
                  onClick={handleClick}
                >
                  Remove Picture
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureComponent;
