import { PieChart } from "@mui/x-charts/PieChart";
import React from "react";
import { RiQuestionLine } from "react-icons/ri";

interface iPie {
  color: string;
  label: string;
  number: number;
}

export const PieCard: React.FC<{
  className: string;
  data: object;
}> = ({ className, data }) => {
  return (
    <div
      className={`${className} h-60 p-2 flex flex-col justify-between gap-4 rounded-lg shadow-custom bg-off-white`}
    >
      <div className="flex items-center justify-between">
        <h3 className="font-bold">{data.head}</h3>
        <button type="button">
          <RiQuestionLine />
        </button>
      </div>
      <PieChart
        colors={data.data.colors}
        series={[
          {
            data: data.data.info,
          },
        ]}
        height={105}
        margin={{ right: 0 }}
        slotProps={{ legend: { hidden: true } }}
      />

      <div className="flex gap-4">
        {data.data.info.map((obj, idx) => {
          return (
            <div key={idx} className="flex items-center gap-1">
              <span
                className={`block w-2 h-2 rounded-full bg-[${data.data.colors[idx]}]`}
              ></span>
              <p className="text-[10px]">{obj.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
