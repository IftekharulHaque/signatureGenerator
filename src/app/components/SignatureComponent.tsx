import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "clipboard-copy";
import ReactQuill from "react-quill";

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
  const [inputText, setInputText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  // Function to handle input text change
  const handleInputChange = (text: string) => {
    setInputText(text);
  };

  // Function to handle Quill editor content change
  const handleQuillChange = (content: string) => {
    setConvertedText(content);
  };

  // Function to copy converted text to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(convertedText);
  };
  const handleCopy = () => {
    const signatureElement = document.getElementById("signature");
    if (signatureElement) {
      // const range = document.createRange();
      // range.selectNode(signatureElement);
      // window.getSelection()?.removeAllRanges();
      // window.getSelection()?.addRange(range);
      // document.execCommand("copy");
      // window.getSelection()?.removeAllRanges();
      const innerHTML = signatureElement.innerHTML;
      copy(innerHTML);

      // const html = new DOMParser().parseFromString(innerHTML, "text/html");
      // const body = html.body;
      // const range = document.createRange();
      // range.selectNode(body);
      // window.getSelection()?.removeAllRanges();
      // window.getSelection()?.addRange(range);
      // document.execCommand("copy");
      // window.getSelection()?.removeAllRanges();
      // console.log(body);
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
                  fontFamily: "cursive",
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
                  {(inputValues.jobPosition || inputValues.companyName) && (
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
                  )}
                  {inputValues.phone && (
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="https://bit.ly/44mNnmG"
                            width="10"
                            height=""
                            alt=""
                            style={{ marginLeft: "16px", marginRight: "4px" }}
                          />
                          <span style={{ fontSize: 14 }}>
                            {inputValues.phone}
                          </span>
                        </span>
                      </td>
                    </tr>
                  )}
                  {inputValues.address1 && (
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="https://bit.ly/3E6nHQJ"
                            width="10"
                            height=""
                            alt=""
                            style={{ marginLeft: "16px", marginRight: "4px" }}
                          />
                          <span style={{ fontSize: 14 }}>
                            {inputValues.address1}
                          </span>
                        </span>
                      </td>
                    </tr>
                  )}
                  {inputValues.website && (
                    <tr>
                      <td>
                        <span style={{ display: "flex", alignItems: "center" }}>
                          <img
                            src="https://bit.ly/44sotT2"
                            width="11"
                            height=""
                            alt=""
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
                        </span>
                      </td>
                    </tr>
                  )}
                  {isLogoChanged && (
                    <tr>
                      <td valign="top">
                        <div style={{ marginRight: "32px" }}>
                          {isLogoChanged && (
                            <img
                              style={{
                                objectFit: "cover",
                                borderRadius: "50%",
                              }}
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
                  )}
                  {isBannerChanged && (
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
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  )}
                  {inputValues.callToActionText && (
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
                  )}

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
