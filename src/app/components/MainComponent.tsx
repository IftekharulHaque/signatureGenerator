"use client";
import React, { useState } from "react";
import FormComponent from "./FormComponent";
import SignatureComponent from "./SignatureComponent";
import VerticalNav from "./VerticalNav";
import PictureComponent from "./PictureComponent";
import TemplateComponent from "./TemplateComponent";
import SocialComponent from "./SocialComponent";
import MarketingComponent from "./MarketingComponent";
import DesignComponent from "./DesignComponent";

const MainComponent: React.FC = () => {
  const [isPicChanged, setIsPicChanged] = useState<File | null>(null);
  const [profilePicSize, setProfilePicSize] = useState<number>(0);
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
  // function handleSizeChange(newInputValues: number): void {
  //   setProfilePicSize(newInputValues);
  // }
  console.log(profilePicSize);
  console.log(isPicChanged);
  return (
    <div className="my-[8%]">
      <div className="flex items-start ">
        <div className="w-1/3">
          <VerticalNav changeTab={setActiveTab} />
        </div>
        <div className="w-1/3">
          {/* {activeTab === "text" ? (
            <div>
              <FormComponent
                onInputChange={handleInputChange}
                inputValues={inputValues}
              />
            </div>
          ) : (
            <div>
              <PictureComponent
                onInputChange={handleImageChange}
                profilePic={isPicChanged}
              />
            </div>
          )} */}
          {(() => {
            switch (activeTab) {
              case "text":
                return (
                  <div>
                    <FormComponent
                      onInputChange={handleInputChange}
                      inputValues={inputValues}
                    />
                  </div>
                );
              case "picture":
                return (
                  <div>
                    <PictureComponent
                      onInputChange={handleImageChange}
                      profilePic={isPicChanged}
                      profilePicSize={profilePicSize}
                      setProfilePicSize={setProfilePicSize}
                      // onSizeChange={function (newInputValues: string): void {
                      //   // throw new Error("Function not implemented.");
                      //   profilePicSize;
                      // }}
                      // profilePicSize={null} // profilePicSize={handleSizeChange}
                    />
                  </div>
                );
              case "template":
                return (
                  <div>
                    <TemplateComponent />
                  </div>
                );
              case "social":
                return (
                  <div>
                    <SocialComponent />
                  </div>
                );
              case "marketing":
                return (
                  <div>
                    <MarketingComponent />
                  </div>
                );
              case "design":
                return (
                  <div>
                    <DesignComponent />
                  </div>
                );
            }
          })()}
        </div>
        <div className="w-1/3">
          <SignatureComponent
            inputValues={inputValues}
            isPicChanged={isPicChanged}
            profilePicSize={profilePicSize} // profilePicSize={profilePicSize}
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
