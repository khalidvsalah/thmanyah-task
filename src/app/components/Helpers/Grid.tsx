import { useEffect, useState } from "react";

export const AppGrid: React.FC = ({
  cols,
  rows,
}: {
  cols: number;
  rows: number;
}) => {
  const [show, setShow] = useState<number>(0);
  const columns = new Array(cols).fill(undefined);

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "G") {
        console.log("___");
      }
    });
  }, []);

  return (
    <ul
      className={`${
        show ? (show === 1 ? "opacity-10" : "opacity-30") : "opacity-0"
      }`}
    >
      {columns.map((_, idx) => (
        <li key={idx}></li>
      ))}
    </ul>
  );
};
