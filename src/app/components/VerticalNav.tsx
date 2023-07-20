// "use client";

// import React, { useState } from "react";
// import { UserIcon, PhotoIcon } from "@heroicons/react/24/outline";

// const VerticalNav = ({
//   changeTab,
// }: {
//   changeTab: React.Dispatch<React.SetStateAction<string>>;
// }) => {
//   const [isTextsActive, setIsTextsActive] = useState(true);
//   const [isPicturesActive, setIsPicturesActive] = useState(false);
//   const [isTemplatesActive, setIsTemplatesActive] = useState(false);
//   const [isSocialsActive, setIsSocialsActive] = useState(false);
//   const [isMarketingActive, setIsMarketingActive] = useState(false);
//   const [isDesignActive, setIsDesignActive] = useState(false);

//   const handleTextsClick = () => {
//     setIsTextsActive(true);
//     setIsPicturesActive(false);
//     setIsTemplatesActive(false);
//     setIsSocialsActive(false);
//     setIsMarketingActive(false);
//     setIsDesignActive(false);
//     console.log("Texts clicked");
//   };

//   const handlePicturesClick = () => {
//     setIsTextsActive(false);
//     setIsPicturesActive(true);
//     setIsTemplatesActive(false);
//     setIsSocialsActive(false);
//     setIsMarketingActive(false);
//     setIsDesignActive(false);
//     console.log("Pictures clicked");
//   };

//   const handleTemplatesClick = () => {
//     setIsTextsActive(false);
//     setIsPicturesActive(false);
//     setIsTemplatesActive(true);
//     setIsSocialsActive(false);
//     setIsMarketingActive(false);
//     setIsDesignActive(false);
//     console.log("Templates clicked");
//   };

//   const handleSocialsClick = () => {
//     setIsTextsActive(false);
//     setIsPicturesActive(false);
//     setIsTemplatesActive(false);
//     setIsSocialsActive(true);
//     setIsMarketingActive(false);
//     setIsDesignActive(false);
//     console.log("Socials clicked");
//   };

//   const handleMarketingClick = () => {
//     setIsTextsActive(false);
//     setIsPicturesActive(false);
//     setIsTemplatesActive(false);
//     setIsSocialsActive(false);
//     setIsMarketingActive(true);
//     setIsDesignActive(false);
//     console.log("Marketing clicked");
//   };

//   const handleDesignClick = () => {
//     setIsTextsActive(false);
//     setIsPicturesActive(false);
//     setIsTemplatesActive(false);
//     setIsSocialsActive(false);
//     setIsMarketingActive(false);
//     setIsDesignActive(true);
//     console.log("Design clicked");
//   };

//   const handleChangeTab = (tab: string) => {
//     changeTab(tab);
//   };

//   return (
//     <div>
//       <div className="text-3xl font-semibold pl-64 mb-8 -mt-[10%]">
//         My Signature
//       </div>
//       <div className="flex justify-center ">
//         <div className="flex-col flex w-40">
//           <button
//             className={`flex items-center gap-2 mb-2 border-s-[3px] ${
//               isTextsActive
//                 ? "border-indigo-500 rounded-r-xl bg-indigo-100 text-indigo-700"
//                 : "border-transparent text-gray-500 rounded-r-xl hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700"
//             } px-4 py-3`}
//             onClick={() => {
//               handleChangeTab("text");
//               handleTextsClick();
//             }}
//           >
//             <UserIcon className="w-4" />
//             <span className="text-sm font-medium"> Texts </span>
//           </button>

//           <button
//             className={`flex items-center gap-2 mb-2 border-s-[3px] ${
//               isPicturesActive
//                 ? "border-indigo-500 bg-indigo-100 text-indigo-700 rounded-r-xl"
//                 : "border-transparent text-gray-500 hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700 rounded-r-xl"
//             } px-4 py-3`}
//             onClick={() => {
//               handleChangeTab("picture");
//               handlePicturesClick();
//             }}
//           >
//             <PhotoIcon className="w-4" />
//             <span className="text-sm font-medium"> Pictures </span>
//           </button>

//           <button
//             className={`flex items-center gap-2 mb-2 border-s-[3px] ${
//               isTemplatesActive
//                 ? "border-indigo-500 bg-indigo-100 text-indigo-700 rounded-r-xl"
//                 : "border-transparent text-gray-500 hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700 rounded-r-xl"
//             } px-4 py-3`}
//             onClick={() => {
//               handleChangeTab("template");
//               handleTemplatesClick();
//             }}
//           >
//             <PhotoIcon className="w-4" />
//             <span className="text-sm font-medium"> Templates </span>
//           </button>

//           <button
//             className={`flex items-center gap-2 mb-2 border-s-[3px] ${
//               isSocialsActive
//                 ? "border-indigo-500 bg-indigo-100 text-indigo-700 rounded-r-xl"
//                 : "border-transparent text-gray-500 hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700 rounded-r-xl"
//             } px-4 py-3`}
//             onClick={() => {
//               handleChangeTab("social");
//               handleSocialsClick();
//             }}
//           >
//             <PhotoIcon className="w-4" />
//             <span className="text-sm font-medium"> Socials </span>
//           </button>

//           <button
//             className={`flex items-center gap-2 mb-2 border-s-[3px] ${
//               isMarketingActive
//                 ? "border-indigo-500 bg-indigo-100 text-indigo-700 rounded-r-xl"
//                 : "border-transparent text-gray-500 hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700 rounded-r-xl"
//             } px-4 py-3`}
//             onClick={() => {
//               handleChangeTab("marketing");
//               handleMarketingClick();
//             }}
//           >
//             <PhotoIcon className="w-4" />
//             <span className="text-sm font-medium"> Marketing </span>
//           </button>

//           <button
//             className={`flex items-center gap-2 mb-2 border-s-[3px] ${
//               isDesignActive
//                 ? "border-indigo-500 bg-indigo-100 text-indigo-700 rounded-r-xl"
//                 : "border-transparent text-gray-500 hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700 rounded-r-xl"
//             } px-4 py-3`}
//             onClick={() => {
//               handleChangeTab("design");
//               handleDesignClick();
//             }}
//           >
//             <PhotoIcon className="w-4" />
//             <span className="text-sm font-medium"> Design </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerticalNav;

import React, { useState } from "react";
import {
  UserIcon,
  PhotoIcon,
  Square2StackIcon,
  ShareIcon,
  UserGroupIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const categories = [
  { id: "text", icon: UserIcon, label: "Texts" },
  { id: "picture", icon: PhotoIcon, label: "Pictures" },
  { id: "template", icon: Square2StackIcon, label: "Templates" },
  { id: "social", icon: ShareIcon, label: "Socials" },
  { id: "marketing", icon: UserGroupIcon, label: "Marketing" },
  { id: "design", icon: PaintBrushIcon, label: "Design" },
];

const VerticalNav = ({
  changeTab,
}: {
  changeTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  type ActiveState = {
    [key: string]: boolean;
  };

  const initialState = categories.reduce((acc: ActiveState, category) => {
    acc[category.id] = category.id === "text";
    return acc;
  }, {} as ActiveState);

  const [activeState, setActiveState] = useState(initialState);

  const handleClick = (categoryId: string) => {
    setActiveState(() => {
      const newActiveState: ActiveState = {};
      categories.forEach((category) => {
        newActiveState[category.id] = category.id === categoryId;
      });
      return newActiveState;
    });
    changeTab(categoryId);
    console.log(`${categoryId} clicked`);
  };

  return (
    <div className="scale-125">
      <div className="text-3xl font-semibold pl-64 mb-8 -mt-[10%]">
        My Signature
      </div>
      <div className="flex justify-center">
        <div className="flex-col flex w-40">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`flex items-center gap-2 mb-2 border-s-[3px] ${
                activeState[category.id]
                  ? "border-indigo-500 bg-indigo-100 text-indigo-700 rounded-r-xl"
                  : "border-transparent text-gray-500 hover:border-gray-100 hover:bg-indigo-50 hover:text-gray-700 rounded-r-xl"
              } px-4 py-3`}
              onClick={() => handleClick(category.id)}
            >
              <category.icon className="w-4" />
              <span className="text-sm font-medium"> {category.label} </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VerticalNav;
