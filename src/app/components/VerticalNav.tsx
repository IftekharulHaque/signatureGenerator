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
    <div className="scale-100 sm:scale-125">
      <div className="flex justify-center">
        <div className="flex-col flex ">
          <div className="text-3xl font-semibold mb-8 -mt-[10%]">
            My Signature
          </div>
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
