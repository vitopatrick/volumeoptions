import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FIRST_LINKS,
  SECOND_LINKS,
  THIRD_LINKS,
} from "../../../lib/side-nav-links";
import { clsx } from "clsx";

const Sidebar = () => {
  const pathname = usePathname();

  const boxClasses = (url: any) =>
    clsx({
      ["font-main text-paper flex gap-1 items-center my-6"]: true,
      ["bg-paper/20 w-full py-2 px-2,shadow rounded-lg mx-2 "]:
        pathname === url,
    });
  const textClasses = (url: any): void => {
    clsx({
      ["font-main text-paper"]: true,
      ["font-main text-green"]: pathname === url,
    });
  };

  return (
    <div className="w-[210px] hidden md:block bg-white h-full">
      {/* parent flex container */}
      <div className="flex flex-col justify-between gap-4 p-3">
        {/* first links flex container */}
        <div>
          {/* logo flex container */}
          <div className="mb-8 font-main font-semibold text-paper text-xl">
            Volume Exchange
          </div>
          {FIRST_LINKS.map((link) => (
            <div key={link.key} className={boxClasses(link.path)}>
              {/* flex item */}
              <div className="ml-2">{link.icon}</div>
              <Link href={link.path} className={textClasses(link.path)}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        {/* second links flex container */}
        <div className="border-t-2">
          {SECOND_LINKS.map((link) => (
            <div key={link.key} className={boxClasses(link.path)}>
              {/* flex item */}
              <div className="ml-2">{link.icon}</div>
              <Link href={link.path} className={textClasses(link.path)}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        {/* Third links flex container */}
        <div className="border-t-2">
          {THIRD_LINKS.map((link) => (
            <div key={link.key} className={boxClasses(link.path)}>
              {/* flex item */}
              <div className="ml-2">{link.icon}</div>
              <Link href={link.path} className={textClasses(link.path)}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
