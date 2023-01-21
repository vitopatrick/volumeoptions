import { TfiEmail } from "react-icons/tfi";
import { MdOutlineVerified, MdPublishedWithChanges } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

const UsersDetails = () => {
  return (
    <>
      {/* parent grid container */}
      <div className=" md:grid grid-cols-2 gap-4">
        {/* grid children */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-white rounded shadow">
          <div className="bg-neutral-300 p-3 md:p-5 rounded-full">
            <TfiEmail className="fill-paper text-base md:text-2xl" />
          </div>
          <div>
            <h2 className="font-semibold text-neutral-500 text-base mb-1">
              Email
            </h2>
            <h1 className="font-bold text-md md:text-xl text-paper">
              johnDoe@gmail.com
            </h1>
          </div>
        </div>
        {/* grid child 2 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-white rounded shadow">
          <div className="bg-neutral-300 p-3 md:p-5 rounded-full">
            <MdOutlineVerified className="fill-paper text-base md:text-2xl" />
          </div>
          <div>
            <h2 className="font-semibold text-neutral-500 text-base mb-1">
              Verified
            </h2>
            <h1 className="font-bold text-md md:text-xl text-paper">
              Not Verified
            </h1>
          </div>
        </div>
        {/* grid child 3 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-white rounded shadow">
          <div className="bg-neutral-300 p-3 md:p-5 rounded-full">
            <MdPublishedWithChanges className="fill-paper text-base md:text-2xl" />
          </div>
          <div>
            <h2 className="font-semibold text-neutral-500 text-base mb-1">
              Withdrawal Limit
            </h2>
            <h1 className="font-bold text-md md:text-xl text-paper">
              0.00456 BTC
            </h1>
          </div>
        </div>
        {/* grid child 4 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-white rounded shadow">
          <div className="bg-neutral-300 p-3 md:p-5 rounded-full">
            <RiLockPasswordLine className="fill-paper text-base md:text-2xl" />
          </div>
          <div>
            <h2 className="font-semibold text-neutral-500 text-base mb-1">
              Trading Password
            </h2>
            <h1 className="font-bold text-md md:text-xl text-paper">xxxxx</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersDetails;
