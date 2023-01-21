import Link from "next/link";
import { FiSearch, FiMenu } from "react-icons/fi";

const Header = () => {
  return (
    <div className="pt-2 pb-3">
      {/* parent div */}
      <div className="flex justify-between items-center gap-3">
        {/* flex item child */}
        <div className="flex items-center w-[90%] bg-[#e9e9e9] py-2 px-2 rounded-xl shadow">
          <input
            type="text"
            name="coin_finder"
            id="coin_finder"
            placeholder="Search about coin here"
            className="w-full mx-1 bg-transparent focus:outline-none font-sec"
          />
          <FiSearch className="cursor-pointer text-[1.3rem]" />
        </div>
        {/* icons div */}
        <div className="flex items-center flex-1 gap-4">
          <Link
            href="/account-profile"
            className=" hidden md:flex uppercase text-paper font-semibold cursor-pointer text-xl font-sec bg-[#e9e9e9] h-[40px] w-[40px]  items-center justify-center rounded-full"
          >
            {"John".slice(0, 2)}
          </Link>
          <div className="block md:hidden">
            <FiMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
