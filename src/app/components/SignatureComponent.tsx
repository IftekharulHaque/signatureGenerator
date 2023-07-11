import React, { useRef } from "react";
import { PhoneIcon, GlobeAltIcon, MapPinIcon } from "@heroicons/react/24/solid";

interface SignatureComponentProps {
  inputValues: Record<string, string>;
  fieldVisibility: Record<string, boolean>;
}

const SignatureComponent: React.FC<SignatureComponentProps> = ({
  inputValues,
}) => {
  const componentRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (componentRef.current) {
      const componentElement = componentRef.current;
      const styles = Array.from(document.styleSheets)
        .map((styleSheet) => Array.from(styleSheet.cssRules))
        .flat()
        .map((cssRule) => cssRule.cssText)
        .join("\n");
      const componentHtml = `<style>${styles}</style>\n${componentElement.innerHTML}`;
      navigator.clipboard.writeText(componentHtml);
    }
  };

  return (
    <div>
      <div className="max-w-xl shadow-xl shadow-gray-200 ">
        <div className="rounded-xl bg-white  ring ring-indigo-50 ">
          <div className="flex-col items-start sm:gap-8">
            <div className="rounded-t-xl  bg-indigo-200 p-4 text-sm font-semibold  text-indigo-500">
              New Email
            </div>
            <div className="mt-4 px-4 font-medium text-gray-500">
              <p>To:</p>
              <p>Subject:</p>
            </div>
            <div className="px-8 pb-8 " ref={componentRef}>
              <table
                dir="ltr"
                className="border-0"
                cellSpacing="0"
                cellPadding="0"
              >
                <tr>
                  <td>
                    <table
                      className="border-0"
                      width="500"
                      cellSpacing="0"
                      cellPadding="0"
                    >
                      <tr>
                        <td className="h-16"></td>
                      </tr>

                      <tr>
                        <td valign="top">
                          <table
                            className="border-0"
                            cellSpacing="0"
                            cellPadding="0"
                          >
                            {inputValues.name && (
                              <tr>
                                <td
                                  className=" leading-6 font-medium font-sans"
                                  align="left"
                                >
                                  <span className="text-black font-bold">
                                    {inputValues.name}
                                  </span>
                                </td>
                              </tr>
                            )}

                            <tr>
                              <td
                                className="text-gray-500  font-semibold leading-6 font-sans"
                                align="left"
                              >
                                <p>
                                  {inputValues.jobPosition}{" "}
                                  {inputValues.jobPosition &&
                                  inputValues.companyName
                                    ? "-"
                                    : null}{" "}
                                  {inputValues.companyName}
                                </p>
                              </td>
                            </tr>

                            <tr>
                              <td
                                className=" text-md  leading-6 font-sans pl-3"
                                align="left"
                              >
                                <div className="flex items-center">
                                  {inputValues.phone && (
                                    <PhoneIcon className="h-4 w-3 mr-1 text-black" />
                                  )}
                                  <p>{inputValues.phone}</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="   leading-6 font-sans pl-3"
                                align="left"
                              >
                                <div className="flex items-center">
                                  {inputValues.address1 && (
                                    <MapPinIcon className="h-4 w-3.5 mr-1 text-black" />
                                  )}
                                  <p>{inputValues.address1}</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td
                                className="   leading-6 font-sans pl-3"
                                align="left"
                              >
                                <div className="flex items-center">
                                  {inputValues.website && (
                                    <GlobeAltIcon className="h-4 w-3.4 mr-1 text-black" />
                                  )}
                                  <a href={`https://${inputValues.website}`}>
                                    {inputValues.website}
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="flex">
        <button
          className=" rounded-xl bg-indigo-500 text-white font-semibold p-2 m-2 hover:bg-indigo-400 mt-4"
          onClick={handleCopy}
        >
          Copy Inner HTML
        </button>
      </div>
    </div>
  );
};

export default SignatureComponent;
