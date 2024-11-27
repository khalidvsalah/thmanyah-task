export const PercentageCard: React.FC<{
  data: object;
  color?: string;
  className?: string;
}> = ({ data, color, className }) => {
  return (
    <div
      style={{
        background: `url(${data.bgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
      className={`${className} h-60 flex flex-col text-center justify-center font-bold rounded-lg shadow-custom`}
    >
      <h2 className="pb-6 text-5xl">{data.value}%</h2>
      <div className="flex items-center justify-center gap-2">
        <span
          style={{ backgroundColor: color }}
          className={`w-2 h-2 rounded-full`}
        ></span>
        <p className="text-xs text-text">{data.head}</p>
      </div>
    </div>
  );
};
