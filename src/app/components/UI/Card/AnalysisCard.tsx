import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export const AnalysisCard: React.FC<{
  name: string;
  description: string;
  children: React.ReactNode;
  className: string;
}> = ({ name, description, children, className }) => {
  return (
    <li className={"p-4 bg-white rounded-lg shadow-custom " + className}>
      <div className="pb-14 flex items-center justify-between">
        <span>
          <h3 className="text-[1.6em]">{name}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </span>
        <button type="button" className="text-2xl">
          <IoIosArrowBack />
        </button>
      </div>
      <div className="flex flex-wrap justify-between gap-4">{children}</div>
    </li>
  );
};
