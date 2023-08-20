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
import Sidebar from "./Sidebar";

const MainComponent: React.FC = () => {
  const [isPicChanged, setIsPicChanged] = useState<File | null>(null);
  const [isLogoChanged, setIsLogoChanged] = useState<File | null>(null);
  const [isBannerChanged, setisBannerChnaged] = useState<File | null>(null);

  const [logoSize, setlogoSize] = useState<number>(64);
  const [profilePicSize, setProfilePicSize] = useState<number>(64);
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

  function handleProfilePicChange(newInputValues: File | null): void {
    setIsPicChanged(newInputValues);
  }

  function handleLogoChange(newInputValues: File | null): void {
    setIsLogoChanged(newInputValues);
  }
  function handleBannerChange(newInputValues: File | null): void {
    setisBannerChnaged(newInputValues);
  }

  console.log(profilePicSize);

  return (
    <div className="my-[8%]">
      <div className="flex  flex-col sm:flex-row">
        <div className="">
          <Sidebar />
        </div>
        <div className="mx-auto">
          <VerticalNav changeTab={setActiveTab} />
        </div>
        <div className="w-[30%] mx-auto">
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
                      onProfilePicChange={handleProfilePicChange}
                      profilePic={isPicChanged}
                      profilePicSize={profilePicSize}
                      setProfilePicSize={setProfilePicSize}
                      onLogoChange={handleLogoChange}
                      logo={isLogoChanged}
                      logoSize={logoSize}
                      setLogoSize={setlogoSize}
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
                    <MarketingComponent
                      onBannerChange={handleBannerChange}
                      bannerPic={isBannerChanged}
                    />
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
        <div className="w-[30%] mx-auto">
          <SignatureComponent
            inputValues={inputValues}
            isPicChanged={isPicChanged}
            profilePicSize={profilePicSize}
            isLogoChanged={isLogoChanged}
            logoSize={logoSize}
            isBannerChanged={isBannerChanged}
          
          />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
