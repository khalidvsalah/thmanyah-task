import Image from "next/image";
import Link from "next/link";

export const AppLogo: React.FC = () => {
  return (
    <Link href="/" id="logo">
      <Image
        src="/assets/media/logo.png"
        width={96}
        height={36}
        alt="ثمانية شعار"
      />
    </Link>
  );
};

export const AppHeader: React.FC = () => {
  return (
    <nav className="px-28 flex items-center justify-between">
      <AppLogo />
      <div id="avatar" className="w-10 h-10 bg-black rounded-full"></div>
    </nav>
  );
};
