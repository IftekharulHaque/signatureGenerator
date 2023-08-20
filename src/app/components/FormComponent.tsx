"use client";

import React, { ChangeEvent, useState } from "react";

interface FormComponentProps {
  onInputChange: (newInputValues: Record<string, string>) => void;
  inputValues: Record<string, string>;
}

const FormComponent: React.FC<FormComponentProps> = ({
  onInputChange,
  inputValues,
}) => {
  const [toggleValues, setToggleValues] = useState<Record<string, string>>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedInputValues = {
      ...inputValues,
      [name]: value,
    };
    onInputChange(updatedInputValues);
  };

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (!checked) {
      setToggleValues({ ...toggleValues, [name]: inputValues[name] });
      onInputChange({ ...inputValues, [name]: "" });
    } else {
      onInputChange({ ...inputValues, [name]: toggleValues[name] });
    }
  };

  console.log(inputValues);
  const inputStyle =
    "w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md";

  return (
    <div className=" shadow-xl shadow-gray-200 ">
      <div className="rounded-xl bg-white  ring ring-indigo-50 ">
        <div className="px-12 pt-6 -mb-6 text-xl text-[#07074D]">Texts</div>
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    defaultValue={inputValues.name}
                    value={inputValues.name}
                    onChange={handleChange}
                    className={inputStyle}
                  />
                  <label className="relative inline-flex items-center ml-4 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      name="name"
                      defaultChecked
                      onChange={handleToggle}
                    />
                    <div className="w-9 h-5 bg-gray-500 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 ">
                      Show
                    </span>
                  </label>
                </div>
              </div>

              <div className="mb-5">
                <label
                  htmlFor="jobPosition"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Job position
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="jobPosition"
                    value={inputValues.jobPosition}
                    onChange={handleChange}
                    placeholder="Job position"
                    className={inputStyle}
                  />

                  <label className="relative inline-flex items-center ml-4 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      name="jobPosition"
                      defaultChecked
                      onChange={handleToggle}
                    />
                    <div className="w-9 h-5 bg-gray-500 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 ">
                      Show
                    </span>
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="companyName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company Name
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="companyName"
                    value={inputValues.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className={inputStyle}
                  />
                  <label className="relative inline-flex items-center ml-4 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      name="companyName"
                      defaultChecked
                      onChange={handleToggle}
                    />
                    <div className="w-9 h-5 bg-gray-500 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 ">
                      Show
                    </span>
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="phone"
                    value={inputValues.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className={inputStyle}
                  />
                  <label className="relative inline-flex items-center ml-4 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      name="phone"
                      defaultChecked
                      onChange={handleToggle}
                    />
                    <div className="w-9 h-5 bg-gray-500 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 ">
                      Show
                    </span>
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="address1"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Address 1
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="address1"
                    value={inputValues.address1}
                    onChange={handleChange}
                    placeholder="Address 1"
                    className={inputStyle}
                  />
                  <label className="relative inline-flex items-center ml-4 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      name="address1"
                      defaultChecked
                      onChange={handleToggle}
                    />
                    <div className="w-9 h-5 bg-gray-500 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 ">
                      Show
                    </span>
                  </label>
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="designation"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Website
                </label>
                <div className="flex items-center">
                  <input
                    type="text"
                    name="website"
                    value={inputValues.website}
                    onChange={handleChange}
                    placeholder="Website"
                    className={inputStyle}
                  />
                  <label className="relative inline-flex items-center ml-4 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      name="website"
                      defaultChecked
                      onChange={handleToggle}
                    />
                    <div className="w-9 h-5 bg-gray-500 peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-green-600"></div>
                    <span className="ml-3 text-sm font-medium text-gray-900 ">
                      Show
                    </span>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
