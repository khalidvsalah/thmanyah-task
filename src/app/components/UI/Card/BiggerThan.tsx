import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

// import { Percentage } from "./Percentage";

export interface iNum {
  number: number;
  name: string;
}

export const BiggerThan: React.FC<{ first: iNum; second: iNum }> = ({
  first,
  second,
}) => {
  return (
    <div className="w-1/2 h-60 flex flex-1 items-center px-12 rounded-lg shadow-custom bg-off-white">
      <div className="flex-1 flex flex-col text-center justify-center font-bold">
        <h2 className="pb-3 text-5xl">{first.number}%</h2>
        <p className="text-xl text-text">{first.name}</p>
      </div>
      <span className={`flex-1 flex justify-center text-5xl text-[#989897]`}>
        <MdArrowForwardIos
          className={`${
            first.number > second.number ? "rotate-180" : "rotate-0"
          }`}
        />
      </span>
      <div className="flex-1 flex flex-col text-center justify-center font-bold">
        <h2 className="text-5xl pb-3">{second.number}%</h2>
        <p className="text-xl text-text">{second.name}</p>
      </div>
    </div>
  );
};
