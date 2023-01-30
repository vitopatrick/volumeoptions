import { TfiEmail } from "react-icons/tfi";
import { MdOutlineVerified, MdPublishedWithChanges } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { UserType } from "../../hooks/useFetchUser";
import { SkeletonCircle, SkeletonText } from "../../shared/skeleton/Skeleton";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const UsersDetails = ({
  user,
  loading,
}: UserType | null | {} | undefined | any) => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      {/* parent grid container */}
      <div className=" md:grid grid-cols-2 gap-4 px-2 text-white font-main">
        {/* grid children */}
        <div className="my-2 p-4 flex items-center gap-6 bg-bg rounded shadow">
          {loading && <SkeletonCircle width={50} height={50} />}
          {!loading && (
            <div className="bg-card p-3 md:p-5 rounded-full">
              <TfiEmail className="text-base md:text-2xl" />
            </div>
          )}
          <div>
            <h2 className="font-medium text-base mb-1">Email</h2>
            {loading && <SkeletonText height={5} width={200} />}
            {!loading && (
              <h1 className="font-semibold text-base md:text-lg text-paper">
                {user.Email}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 2 */}
        <div className="my-2 p-4 flex items-center gap-6 bg-bg rounded shadow">
          {loading && <SkeletonCircle width={50} height={50} />}
          {!loading && (
            <div className="bg-card p-3 md:p-5 rounded-full">
              <MdOutlineVerified className="fill-paper text-base md:text-2xl" />
            </div>
          )}
          <div>
            <h2 className="font-medium text-base mb-1">Account Status</h2>
            {loading && <SkeletonText height={5} width={200} />}
            {!loading && (
              <h1 className="font-semibold text-base md:text-lg text-paper">
                {user.verfied ? "Verified" : "Not Verified"}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 3 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-bg rounded shadow">
          {loading && <SkeletonCircle width={50} height={50} />}
          {!loading && (
            <div className="bg-card p-3 md:p-5 rounded-full">
              <MdPublishedWithChanges className="text-base md:text-2xl" />
            </div>
          )}
          <div>
            <h2 className="font-medium text-base mb-1">Withdrawal Limit</h2>
            {loading && <SkeletonText height={5} width={200} />}
            {!loading && (
              <h1 className="font-semibold text-base md:text-lg">
                {user.verfied
                  ? "100btc"
                  : "No withdrawal please verify account"}
              </h1>
            )}
          </div>
        </div>
        {/* grid child 4 */}
        <div className="my-2 p-4 font-sec flex items-center gap-6 bg-bg rounded shadow">
          {loading && <SkeletonCircle width={50} height={50} />}
          {!loading && (
            <div className="bg-card p-3 md:p-5 rounded-full">
              <RiLockPasswordLine className="text-base md:text-2xl" />
            </div>
          )}
          <div>
            <h2 className="font-medium text-base mb-1">Trading Password</h2>
            {loading && <SkeletonText width={200} height={5} />}
            {!loading && (
              <div className="flex items-center gap-3">
                <h1 className="font-bold text-base md:text-lg text-paper">
                  {user.tradingPassword
                    ? isShow
                      ? user.tradingPassword
                      : "xxxxx"
                    : "N/A"}
                </h1>
                <button onClick={toggleShow}>
                  {isShow ? <BsEye /> : <BsEyeSlash />}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersDetails;
