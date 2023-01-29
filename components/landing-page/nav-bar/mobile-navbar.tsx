import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import { links } from "./links";

const MobileNavbar = ({ show, close }: any) => {
  return (
    <nav
      className={
        show
          ? "absolute top-0 left-0 backdrop-blur bg-text_main/40 w-full h-screen z-30"
          : "hidden"
      }
    >
      <div className="absolute top-0 right-0 p-4">
        <FaTimes
          onClick={() => close(false)}
          className="text-3xl fill-white cursor-pointer"
        />
      </div>
      <div className="flex flex-col gap-4 p-4 mt-10">
        {links.map((link: any) => (
          <Link
            href={`/${link.path}`}
            key={link.id}
            className="capitalize text-4xl my-6 font-light hover:text-teal-400 hover:underline"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
