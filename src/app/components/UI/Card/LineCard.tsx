import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { LinePlot } from "@mui/x-charts/LineChart";

export const LineCard: React.FC = ({ data }) => {
  return (
    <div className="w-[calc(50%-0.5rem)] h-60 px-2 py-4 flex flex-col justify-between rounded-lg shadow-custom bg-[#FBFAF7]">
      <h2 className="text-md font-medium">{data.head}</h2>
      <ChartContainer
        width={500}
        height={300}
        className="w-full h-4/5"
        series={[{ type: "line", data: data.data.series }]}
        xAxis={[{ scaleType: "point", data: data.data.labels }]}
      >
        <LinePlot />
      </ChartContainer>
      <h1 className="text-center text-4xl font-bold text-orange">
        {data.value}
      </h1>
    </div>
  );
};
