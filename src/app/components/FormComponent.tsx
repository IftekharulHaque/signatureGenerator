"use client";

import React, { useState, ChangeEvent } from "react";
import Switch from "react-switch";

interface FormComponentProps {
  onInputChange: (newInputValues: Record<string, string>) => void;
  fieldVisibility: Record<string, boolean>;
  onFieldVisibilityChange: (
    newFieldVisibility: Record<string, boolean>
  ) => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onInputChange }) => {
  const [isFieldVisible, setIsFieldVisible] = useState(false);
  const [fieldVisibility, setFieldVisibility] = useState<
    Record<string, boolean>
  >({
    name: false,
    jobPosition: false,
    companyName: false,
    phone: false,
    address1: false,
    website: false,
  });

  const [inputValues, setInputValues] = useState<Record<string, string>>({
    name: "",
    jobPosition: "",
    companyName: "",
    phone: "",
    address1: "",
    website: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedInputValues = {
      ...inputValues,
      [name]: value,
    };
    setInputValues(updatedInputValues);
    onInputChange(updatedInputValues);
  };

  // const handleSwitchToggle = (checked: boolean) => {
  //   setIsFieldVisible(checked);
  // };
  const handleSwitchToggle = (fieldName: string) => (checked: boolean) => {
    setFieldVisibility((prevState) => ({
      ...prevState,
      [fieldName]: checked,
    }));
    console.log(fieldName, checked);
  };

  //   const handleSwitchToggle = (fieldName: string, checked: boolean) => {
  //   setFieldVisibility((prevState) => ({
  //     ...prevState,
  //     [fieldName]: checked,
  //   }));
  // };

  const inputStyle =
    "w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md";

  return (
    <div className="max-w-xl shadow-xl shadow-gray-200 ml-56">
      <div className="rounded-xl bg-white  ring ring-indigo-50 ">
        <div className="flex items-center justify-center p-12">
          <div className="mx-auto w-full max-w-[550px]">
            <form>
              <div className="mb-5">
                <Switch
                  checked={fieldVisibility[inputValues.name]}
                  onChange={handleSwitchToggle(inputValues.name)}
                  onColor="#6A64F1"
                  offColor="#e0e0e0"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  handleDiameter={22}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={24}
                  width={48}
                  className="react-switch"
                />
              </div>
              <div className="mb-5">
                <Switch
                  checked={fieldVisibility[inputValues.jobPosition]}
                  onChange={handleSwitchToggle(inputValues.jobPosition)}
                  onColor="#6A64F1"
                  offColor="#e0e0e0"
                  onHandleColor="#ffffff"
                  offHandleColor="#ffffff"
                  handleDiameter={22}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={24}
                  width={48}
                  className="react-switch"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={inputValues.name}
                  onChange={handleChange}
                  className={inputStyle}
                />
              </div>

              <div className="mb-5">
                <label
                  htmlFor="jobPosition"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Job position
                </label>
                <input
                  type="text"
                  name="jobPosition"
                  value={inputValues.jobPosition}
                  onChange={handleChange}
                  placeholder="Job position"
                  className={inputStyle}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="companyName"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={inputValues.companyName}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className={inputStyle}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phone"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  value={inputValues.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className={inputStyle}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="address1"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Address 1
                </label>
                <input
                  type="text"
                  name="address1"
                  value={inputValues.address1}
                  onChange={handleChange}
                  placeholder="Address 1"
                  className={inputStyle}
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="designation"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Website
                </label>
                <input
                  type="text"
                  name="website"
                  value={inputValues.website}
                  onChange={handleChange}
                  placeholder="Website"
                  className={inputStyle}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;