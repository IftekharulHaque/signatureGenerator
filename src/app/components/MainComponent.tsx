"use client";
import React, { useState } from "react";
import FormComponent from "./FormComponent";
import SignatureComponent from "./SignatureComponent";
import VerticalNav from "./VerticalNav";
import PictureComponent from "./PictureComponent";

const MainComponent: React.FC = () => {
  const [isPicChanged, setIsPicChanged] = useState<File | null>(null);
  const [activeTab, setActiveTab] = useState("text");
  const [inputValues, setInputValues] = useState<Record<string, string>>({
    name: "",
    jobPosition: "",
    companyName: "",
    phone: "",
    address1: "",
    website: "",
  });

  function handleInputChange(newInputValues: Record<string, string>) {
    setInputValues(newInputValues);
  }
  console.log(activeTab);

  function handleImageChange(newInputValues: File | null): void {
    setIsPicChanged(newInputValues);
  }
  console.log(isPicChanged);
  return (
    <div className="">
      <div className="text-3xl font-semibold pl-64 pt-16 mt-20 mb-8">
        My Signature
      </div>

      <div className="flex items-start ">
        <div className="w-1/3">
          <VerticalNav changeTab={setActiveTab} />
        </div>
        <div className="w-1/3">
          {activeTab === "text" ? (
            <div>
              <FormComponent onInputChange={handleInputChange} />
            </div>
          ) : (
            <div>
              <PictureComponent onInputChange={handleImageChange} />
            </div>
          )}
        </div>
        <div className="w-1/3">
          <SignatureComponent
            inputValues={inputValues}
            isPicChanged={isPicChanged}
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
