export const ProfitCard: React.FC<{
  data: object;
}> = ({ data }) => {
  return (
    <div className="w-[calc(50%-0.5rem)] flex flex-col justify-between h-60 p-2 rounded-lg shadow-custom bg-[#FBFAF7]">
      <h2 className="text-md font-medium">{data.name}</h2>
      <div className="flex gap-2 items-center pt-4">
        <span className="w-2 h-2 bg-[red] rounded-full"></span>
        <p className="text-xs font-medium">الايراد السنوي</p>
      </div>
      <h4 className="text-4xl font-bold">{data.data.annual}%</h4>
      <ul className="h-1/2 flex items-end justify-between pt-4">
        {data.data.quarters.map((quarter, idx) => {
          return (
            <li
              key={idx}
              style={{ height: `${quarter.value}%` }}
              className={`font-medium px-[0.25em] py-[0.3em] flex flex-col items-center justify-between rounded-md shadow-custom bg-[#F9F7F2] hover:bg-red-400`}
            >
              <h6 className="text-sm">{quarter.value}%</h6>
              <span className="text-[8px]">{quarter.name}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
