import Link from "next/link";

export const NavList: React.FC<{
  head: string;
  items: object;
}> = ({ head, items = {} }) => {
  return (
    <>
      <h3 className="pb-4 font-medium text-lg">{head}</h3>
      <ul>
        {Object.entries(items).map(([url, name], idx) => {
          return (
            <li key={idx} className="pb-1 font-medium text-md text-gray-500">
              <Link href={url}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
