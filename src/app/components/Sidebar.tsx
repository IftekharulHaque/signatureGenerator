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
  { id: "text", icon: UserIcon, label: "Texts" },
  { id: "picture", icon: PhotoIcon, label: "Pictures" },
  { id: "template", icon: Square2StackIcon, label: "Templates" },
  { id: "social", icon: ShareIcon, label: "Socials" },
  { id: "marketing", icon: UserGroupIcon, label: "Marketing" },
  { id: "design", icon: PaintBrushIcon, label: "Design" },
];
const Sidebar = () => {
  return (
    <div>
      <div className="fixed top-0 left-0 z-40  h-screen transition-transform sm:w-64 ">
        <div className="h-full px-3 py-4 overflow-y-auto bg-indigo-100">
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
