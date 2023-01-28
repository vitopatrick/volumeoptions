import Link from "next/link";
import { usePathname } from "next/navigation";
import { FIRST_LINKS, SECOND_LINKS } from "../../../lib/side-nav-links";
import { clsx } from "clsx";

const Sidebar = () => {
  const pathname = usePathname();

  const boxClasses = (url: any) =>
    clsx({
      ["font-sec text-paper flex gap-1 items-center my-6 pl-4"]: true,
      ["bg-bg w-full py-2 pl-2 rounded-lg "]: pathname === url,
    });

  const textClasses = (url: any) =>
    clsx({
      ["font-sec"]: true,
      ["font-sec font-semibold text-success_light"]: pathname === url,
    });

  return (
    <div className="w-[260px] hidden md:block bg-card h-full">
      {/* parent flex container */}
      <div className="flex flex-col justify-between gap-4 p-3">
        {/* first links flex container */}
        <div>
          {/* logo flex container */}
          <div className="mb-8 font-sec font-bold text-paper text-xl">
            Volume Exchange
          </div>
          {FIRST_LINKS.map((link) => (
            <Link
              href={link.path}
              key={link.key}
              className={boxClasses(link.path)}
            >
              {/* flex item */}
              <div className={textClasses(link.path)}>{link.icon}</div>
              <div className={textClasses(link.path)}>{link.label}</div>
            </Link>
          ))}
        </div>
        {/* second links flex container */}
        <div>
          {SECOND_LINKS.map((link) => (
            <Link
              href={link.path}
              key={link.key}
              className={boxClasses(link.path)}
            >
              {/* flex item */}
              <div className={textClasses(link.path)}>{link.icon}</div>
              <div className={textClasses(link.path)}>{link.label}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
