import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignatureComponentProps {
  inputValues: Record<string, string>;
  isPicChanged: File | null;
  isLogoChanged: File | null;
  isBannerChanged: File | null;
  logoSize: number;

  profilePicSize: number;
}

const SignatureComponent: React.FC<SignatureComponentProps> = ({
  inputValues,
  isPicChanged,
  logoSize,
  isLogoChanged,
  profilePicSize,
  isBannerChanged,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    // if (componentRef.current) {
    //   const componentElement = componentRef.current;
    //   const styles = Array.from(document.styleSheets)
    //     .map((styleSheet) => Array.from(styleSheet.cssRules))
    //     .flat()
    //     .map((cssRule) => cssRule.cssText)
    //     .join("\n");
    //   const componentHtml = `<style>${styles}</style>\n${componentElement.innerHTML}`;
    //   navigator.clipboard.writeText(componentHtml);
    //   toast.success("Copied to clipboard!");
    // }

    const signatureElement = document.getElementById("signature");
    if (signatureElement) {
      const range = document.createRange();
      range.selectNode(signatureElement);
      window.getSelection()?.removeAllRanges();
      window.getSelection()?.addRange(range);
      document.execCommand("copy");
      window.getSelection()?.removeAllRanges();
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div className="">
      <div className=" shadow-xl shadow-gray-200">
        <div className="rounded-xl bg-white ring ring-indigo-50">
          <div className="flex-col items-start sm:gap-8">
            <div className="rounded-t-xl bg-indigo-200 p-4 text-sm font-semibold text-indigo-500">
              New Email
            </div>
            <div className="mt-4 px-4 font-medium text-gray-500">
              <p>To:</p>
              <p>Subject:</p>
            </div>

            <div id="signature">
              <table
                style={{
                  borderCollapse: "collapse",
                  marginLeft: "32px",
                }}
                border={0}
                cellPadding={0}
                dir="ltr"
              >
                <tbody>
                  <tr style={{ height: 64 }}>
                    <td colSpan={2}></td>
                  </tr>
                  <tr>
                    <td rowSpan={8} valign="top">
                      <div style={{ marginRight: "32px" }}>
                        {isPicChanged && (
                          <img
                            style={{ objectFit: "cover", borderRadius: "50%" }}
                            src={
                              isPicChanged
                                ? URL.createObjectURL(isPicChanged)
                                : ""
                            }
                            alt=""
                            height={profilePicSize}
                            width={profilePicSize}
                          />
                        )}
                      </div>
                    </td>
                    <td align="left">
                      <strong> {inputValues.name}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td align="left">
                      <strong>
                        {inputValues.jobPosition}
                        {inputValues.jobPosition && inputValues.companyName
                          ? " - "
                          : ""}
                        {inputValues.companyName}
                      </strong>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {inputValues.phone && (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="https://bit.ly/44mNnmG"
                            width="10"
                            height="10"
                            alt="Phone"
                            style={{ marginLeft: "16px", marginRight: "4px" }}
                          />
                          <span style={{ fontSize: 14 }}>
                            {inputValues.phone}
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {inputValues.address1 && (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="https://bit.ly/3E6nHQJ"
                            width="10"
                            height="10"
                            alt="address"
                            style={{ marginLeft: "16px", marginRight: "4px" }}
                          />
                          <span style={{ fontSize: 14 }}>
                            {inputValues.address1}
                          </span>
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      {inputValues.website && (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="https://bit.ly/44sotT2"
                            width="11"
                            height="11"
                            alt="Phone"
                            style={{ marginLeft: "16px", marginRight: "4px" }}
                          />
                          <a
                            href={`https://${inputValues.website}`}
                            target="_blank"
                          >
                            <span style={{ fontSize: 14 }}>
                              {inputValues.website}
                            </span>
                          </a>
                        </div>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td valign="top">
                      <div style={{ marginRight: "32px" }}>
                        {isLogoChanged && (
                          <img
                            style={{ objectFit: "cover", borderRadius: "50%" }}
                            src={
                              isLogoChanged
                                ? URL.createObjectURL(isLogoChanged)
                                : ""
                            }
                            alt=""
                            height={logoSize}
                            width={logoSize}
                          />
                        )}
                      </div>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {(isBannerChanged || inputValues.bannerLink) && (
                        <div style={{ marginRight: "32px" }}>
                          {inputValues.bannerLink && (
                            <a
                              href={`https://${inputValues.bannerLink}`}
                              target="_blank"
                            >
                              <img
                                style={{
                                  objectFit: "cover",
                                  borderRadius: "5%",
                                }}
                                src={
                                  isBannerChanged
                                    ? URL.createObjectURL(isBannerChanged)
                                    : ""
                                }
                                alt=""
                                height="auto"
                                width={256}
                              />
                            </a>
                          )}
                          {!inputValues.bannerLink && (
                            <img
                              style={{ objectFit: "cover", borderRadius: "5%" }}
                              src={
                                isBannerChanged
                                  ? URL.createObjectURL(isBannerChanged)
                                  : ""
                              }
                              alt=""
                              height="auto"
                              width={256}
                            />
                          )}
                        </div>
                      )}
                    </td>
                  </tr>

                  <tr>
                    <td>
                      {inputValues.callToActionText &&
                        inputValues.callToActionLink && (
                          <div
                            style={{
                              display: "inline-block",
                              backgroundColor: "black",
                              color: "white",
                              margin: "5px",
                              borderRadius: "5px",
                            }}
                          >
                            <a
                              href={`https://${inputValues.callToActionLink}`}
                              target="_blank"
                            >
                              <strong>{inputValues.callToActionText}</strong>
                            </a>
                          </div>
                        )}
                      {!inputValues.callToActionLink && (
                        <div
                          style={{
                            display: "inline-block",
                            borderRadius: "5px",
                            backgroundColor: "black",
                            color: "white",
                            margin: "5px",
                          }}
                        >
                          <strong>{inputValues.callToActionText}</strong>
                        </div>
                      )}
                    </td>
                  </tr>
                  <tr style={{ height: 64 }}>
                    <td colSpan={2}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between m-4">
        <button
          className="rounded-xl bg-indigo-500 text-white font-semibold p-4 m-2 hover:bg-indigo-400 mt-4"
          onClick={handleCopy}
        >
          Copy Inner HTML
        </button>
        <button className="rounded-xl bg-indigo-500 text-white font-semibold p-4 m-2 hover:bg-indigo-400 mt-4">
          Install Signature
        </button>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SignatureComponent;
