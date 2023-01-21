import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { ImSwitch } from "react-icons/im";
import MobileSideNav from "../side-nav/mobile-sidenav";

const Header = () => {
  const pathname = usePathname();

  const header = pathname?.split("/")[1];

  // show mobile nav
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="pt-2 pb-3">
        {/* parent div */}
        <div className="flex justify-between items-center ">
          {/* flex item child */}
          <div className="flex items-center w-[90%] text-2xl font-bold font-sec text-paper py-2 capitalize">
            {header}
          </div>
          {/* icons div */}
          <div className="flex items-center flex-1 gap-4">
            <Link
              href="/account-profile"
              className=" hidden md:flex uppercase text-paper font-semibold cursor-pointer text-xl font-sec bg-[#e9e9e9] h-[40px] w-[40px]  items-center justify-center rounded-full"
            >
              {"John".slice(0, 2)}
            </Link>
            <div>
              <ImSwitch className="fill-paper text-2xl cursor-pointer" />
            </div>
            <div className="block md:hidden">
              <FiMenu
                className="text-paper text-2xl cursor-pointer"
                onClick={() => setShow(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <MobileSideNav hide={show} setHide={setShow} />
    </>
  );
};

export default Header;
