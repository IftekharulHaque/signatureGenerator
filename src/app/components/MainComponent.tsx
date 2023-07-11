"use client";
import React, { useState } from "react";
import FormComponent from "./FormComponent";
import SignatureComponent from "./SignatureComponent";

const MainComponent: React.FC = () => {
  const [inputValues, setInputValues] = useState<Record<string, string>>({
    name: "",
    jobPosition: "",
    companyName: "",
    phone: "",
    address1: "",
    website: "",
  });

  const handleInputChange = (newInputValues: Record<string, string>) => {
    setInputValues(newInputValues);
  };
  const [fieldVisibility, setVisibility] = useState<Record<string, boolean>>({
    name: false,
    jobPosition: false,
    companyName: false,
    phone: false,
    address1: false,
    website: false,
  });

  return (
    <div className="">
      <div className="text-3xl font-semibold pl-64 pt-16 mt-20 mb-8">
        My Signature
      </div>
      <div className="flex items-center ">
        <div className="w-1/2">
          <FormComponent
            onInputChange={handleInputChange}
            fieldVisibility={fieldVisibility}
            onFieldVisibilityChange={setVisibility}
          />{" "}
        </div>
        <div className="w-1/2">
          <SignatureComponent
            inputValues={inputValues}
            fieldVisibility={fieldVisibility}
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
