import React from "react";
import {
  UserIcon,
  Bars4Icon,
  PaintBrushIcon,
  PhotoIcon,
  ShareIcon,
  Square2StackIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const categories = [
  { id: "Menu", icon: UserIcon, label: "Menu" },
  { id: "Departments", icon: PhotoIcon, label: "Departments" },
  { id: "Co-workers", icon: Square2StackIcon, label: "Co-workers" },
  { id: "Analytics", icon: ShareIcon, label: "Analytics" },
  {
    id: "MarketingCampaingns",
    icon: UserGroupIcon,
    label: "Marketing Campaingns",
  },
  { id: "MOre", icon: PaintBrushIcon, label: "MOre" },
];
const Sidebar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-40  h-screen transition-transform sm:w-64 ">
        <div className="h-full px-2 py-4 sm:px-4 overflow-y-auto bg-indigo-100">
          <ul className="space-y-2 font-medium">
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  href="#"
                  className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group"
                >
                  <category.icon className="w-6 h-6 sm:hidden mr-3" />
                  <span className="hidden sm:inline">{category.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg"></div>
      </div>
    </div>
  );
};

export default Sidebar;
