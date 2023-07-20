import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SignatureComponentProps {
  inputValues: Record<string, string>;
  isPicChanged: File | null;
  profilePicSize: number;
}

const SignatureComponent: React.FC<SignatureComponentProps> = ({
  inputValues,
  isPicChanged,
  profilePicSize,
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
      toast.success("Copied to clipboard!");
    }
  };

  return (
    <div className="mr-10">
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
            <div ref={componentRef}>
              <div className="px-8 pb-8 flex">
                <div className="mt-16 mx-3">
                  {isPicChanged && (
                    <img
                      className="object-cover rounded-full"
                      src={
                        isPicChanged ? URL.createObjectURL(isPicChanged) : ""
                      }
                      alt=""
                      height={profilePicSize}
                      width={profilePicSize}
                    />
                  )}
                </div>
                <div>
                  <table
                    className="border-0 "
                    cellPadding={0}
                    cellSpacing={0}
                    width={400}
                    dir="ltr"
                  >
                    <thead>
                      <tr>
                        <th className="h-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        {inputValues.name && (
                          <td
                            className="leading-6 font-medium font-sans"
                            align="left"
                          >
                            <span className="text-black font-bold">
                              {inputValues.name}
                            </span>
                          </td>
                        )}
                      </tr>
                      <tr>
                        <td
                          className="text-gray-500 font-semibold leading-6 font-sans"
                          align="left"
                        >
                          <p>
                            {inputValues.jobPosition}{" "}
                            {inputValues.jobPosition && inputValues.companyName
                              ? "-"
                              : null}{" "}
                            {inputValues.companyName}
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className="text-md leading-6 font-sans pl-3"
                          align="left"
                        >
                          <div className="flex items-center">
                            {inputValues.phone && (
                              <>
                                <img
                                  src="https://w7.pngwing.com/pngs/831/26/png-transparent-telephone-logo-telephone-call-computer-icons-symbol-phone-miscellaneous-cdr-text-thumbnail.png"
                                  width="10"
                                  height="10"
                                  alt="Phone"
                                  className="mr-1"
                                />
                              </>
                            )}
                            <p>{inputValues.phone}</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="leading-6 font-sans pl-3" align="left">
                          <div className="flex items-center">
                            {inputValues.address1 && (
                              <>
                                <img
                                  src="https://w7.pngwing.com/pngs/244/287/png-transparent-google-map-maker-pin-computer-icons-google-maps-map-icon-angle-black-map-thumbnail.png"
                                  width="10"
                                  height="10"
                                  alt="Phone"
                                  className="mr-1"
                                />
                              </>
                            )}
                            <p>{inputValues.address1}</p>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="leading-6 font-sans pl-3" align="left">
                          <div className="flex items-center">
                            {inputValues.website && (
                              <>
                                <img
                                  src="https://w7.pngwing.com/pngs/798/799/png-transparent-web-development-logo-world-wide-web-website-web-symbol-s-web-design-symmetry-monochrome-thumbnail.png"
                                  width="11"
                                  height="11"
                                  alt="Phone"
                                  className="mr-1"
                                />
                              </>
                            )}
                            <a
                              href={`https://${inputValues.website}`}
                              target="_blank"
                            >
                              {inputValues.website}
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="h-4"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* <div
              ref={componentRef}
              style={{
                display: "flex",
                paddingLeft: "2rem",
                paddingBottom: "2rem",
              }}
            >
              <div style={{ marginTop: "6rem", marginLeft: "0.5rem" }}>
                {isPicChanged && (
                  <img
                    style={{
                      height: "4rem",
                      width: "4rem",
                      objectFit: "cover",
                      borderRadius: "9999px",
                    }}
                    src={isPicChanged ? URL.createObjectURL(isPicChanged) : ""}
                    alt=""
                  />
                )}
              </div>
              <div>
                <table
                  style={{
                    borderCollapse: "collapse",
                    width: "400px",
                    direction: "ltr",
                  }}
                >
                  <thead>
                    <tr>
                      <th style={{ height: "4rem" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {inputValues.name && (
                        <td
                          style={{
                            lineHeight: "1.5",
                            fontWeight: 500,
                            fontFamily: "sans-serif",
                          }}
                          align="left"
                        >
                          <span style={{ color: "black", fontWeight: "bold" }}>
                            {inputValues.name}
                          </span>
                        </td>
                      )}
                    </tr>
                    <tr>
                      <td
                        style={{
                          color: "gray",
                          fontWeight: 600,
                          lineHeight: "1.5",
                          fontFamily: "sans-serif",
                          paddingLeft: "0.75rem",
                        }}
                        align="left"
                      >
                        <p>
                          {inputValues.jobPosition}{" "}
                          {inputValues.jobPosition && inputValues.companyName
                            ? "-"
                            : null}{" "}
                          {inputValues.companyName}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: "1rem",
                          lineHeight: "1.5",
                          fontFamily: "sans-serif",
                          paddingLeft: "0.75rem",
                        }}
                        align="left"
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {inputValues.phone && (
                            <img
                              src="https://s3.sendassets.io/s2/6y27quvq.png"
                              width="10"
                              height="10"
                              style={{
                                height: "1rem",
                                width: "0.75rem",
                                marginRight: "0.25rem",
                                color: "black",
                              }}
                              alt="Phone"
                            />
                          )}
                          <p>{inputValues.phone}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: "1rem",
                          lineHeight: "1.5",
                          fontFamily: "sans-serif",
                          paddingLeft: "0.75rem",
                        }}
                        align="left"
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {inputValues.address1 && (
                            <img
                              src="https://s3.sendassets.io/s2/6y27quvq.png"
                              width="10"
                              height="10"
                              style={{
                                height: "1rem",
                                width: "0.875rem",
                                marginRight: "0.25rem",
                                color: "black",
                              }}
                              alt="Address"
                            />
                          )}
                          <p>{inputValues.address1}</p>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td
                        style={{
                          fontSize: "1rem",
                          lineHeight: "1.5",
                          fontFamily: "sans-serif",
                          paddingLeft: "0.75rem",
                        }}
                        align="left"
                      >
                        <div style={{ display: "flex", alignItems: "center" }}>
                          {inputValues.website && (
                            <img
                              src="https://s3.sendassets.io/s2/6y27quvq.png"
                              width="10"
                              height="10"
                              style={{
                                height: "1rem",
                                width: "0.85rem",
                                marginRight: "0.25rem",
                                color: "black",
                              }}
                              alt="Website"
                            />
                          )}
                          <a
                            href={`https://${inputValues.website}`}
                            target="_blank"
                          >
                            {inputValues.website}
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ height: "1rem" }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
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
