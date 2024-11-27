import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { AiOutlineYoutube } from "react-icons/ai";
import { RiTiktokLine } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import { LuTwitter } from "react-icons/lu";

import { AppLogo } from "./Header";

import { ModeBtn } from "../UI/Button/ModeBtn";
import { NavList } from "../UI/List/NavList";
import { Account } from "../UI/Link/Link";

const ADD_LINKS = {
  "/001": "مواج تساعد في الاعلام",
  "/002": "الهةية البصرية",
  "/003": "الدستور",
  "/004": "سياسة الخصوصية",
};
const PRODUCTION_LINKS = {
  "/001": "الاذاعة",
  "/002": "الافلام",
  "/003": "النشرات البريدية",
};
const GLOBAL_LINKS = {
  "/001": "الخدمات",
  "/002": "التوظيف",
  "/003": "مدونة الفريق",
  "/004": "الاسئله المتكررة",
  "/005": "اتصل بنا",
};

export const AppFooter: React.FC = () => {
  return (
    <footer className="py-12 mx-28 border-t">
      <ul className="flex items-center justify-between">
        <li className="flex flex-col gap-3">
          <AppLogo />
          <ModeBtn />
        </li>
        <li className="px-8 w-1/2 flex justify-between border-x">
          <div>
            <NavList head="الاعلام" items={ADD_LINKS} />
          </div>
          <div>
            <NavList head="انتاج ثمانية" items={PRODUCTION_LINKS} />
          </div>
          <div>
            <NavList head="روابط عامة" items={GLOBAL_LINKS} />
          </div>
        </li>
        <li className="w-1/4 text-center">
          <h2 className="pb-4 font-medium text-xl">
            صفحاتنا علي شبكات التواصل
          </h2>
          <ul className="flex justify-between pb-4 text-orange text-xl border-b">
            <li>
              <Account url="https://www.instagram.com/thmanyah">
                <FaInstagram />
              </Account>
            </li>
            <li>
              <Account url="https://www.instagram.com/thmanyah">
                <RiLinkedinLine />
              </Account>
            </li>
            <li>
              <Account url="https://www.instagram.com/thmanyah">
                <AiOutlineYoutube />
              </Account>
            </li>
            <li>
              <Account url="https://www.instagram.com/thmanyah">
                <RiTiktokLine />
              </Account>
            </li>
            <li>
              <Account url="https://www.instagram.com/thmanyah">
                <CiFacebook />
              </Account>
            </li>
            <li>
              <Account url="https://www.instagram.com/thmanyah">
                <LuTwitter />
              </Account>
            </li>
          </ul>
          <p className="pt-4 font-medium text-sm text-gray-500">
            جميع الحقوق محفوظة لشركة 2022© ثمانية للنشر والتوزيع.
          </p>
        </li>
      </ul>
    </footer>
  );
};
