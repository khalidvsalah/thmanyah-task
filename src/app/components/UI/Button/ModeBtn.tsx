import React from "react";
import { MdDarkMode } from "react-icons/md";

export const ModeBtn: React.FC = () => {
  return (
    <button
      type="button"
      className="flex items-center gap-2 p-2 bg-black text-white rounded-md"
    >
      <span>
        <MdDarkMode />
      </span>
      <span>الوضع الداكن</span>
    </button>
  );
};
