import Link from "next/link";
import { FiSearch, FiMenu } from "react-icons/fi";
import { TiMessage } from "react-icons/ti";
import { GrNotification } from "react-icons/gr";

const Header = () => {
  return (
    <div className="py-4">
      {/* parent div */}
      <div className="flex justify-between items-center gap-3">
        {/* flex item child */}
        <div className="flex items-center w-[90%] bg-[#e9e9e9] py-2 px-2 rounded-xl shadow">
          <input
            type="text"
            name="coin_finder"
            id="coin_finder"
            placeholder="Search about coin here"
            className="w-full mx-1 bg-transparent focus:outline-none font-main"
          />
          <FiSearch className="cursor-pointer text-[1.3rem]" />
        </div>
        {/* icons div */}
        <div className="flex items-center flex-1 gap-4">
          <div>
            <GrNotification className="cursor-pointer text-[1.3rem] outline-paper" />
          </div>
          <div className=" hidden md:flex uppercase text-paper font-semibold cursor-pointer text-xl font-main bg-[#e9e9e9] h-[40px] w-[40px]  items-center justify-center rounded-full">
            {"ikoro".slice(0, 2)}
          </div>
          <div className="block md:hidden">
            <FiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
