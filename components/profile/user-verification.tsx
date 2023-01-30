import { useState } from "react";
import UserModal from "./user-verification-modal";
import UserTradingModal from "./user-trading-password-modal";

const UserVerification = ({ user, loading }: any) => {
  const [hide, setHide] = useState(false);
  const [secondModal, setSecondModal] = useState(false);

  const isTradingPassword = user?.tradingPassword ? true : false;

  return (
    <>
      <div className="flex items-center gap-2 px-3 font-main">
        <div className="my-4">
          <button
            onClick={() => setHide(true)}
            className="font-sec rounded-full block px-3 py-1 text-xs border-teal-500 border-[1px] font-bold text-teal-500"
          >
            Start verification
          </button>
        </div>
        {!isTradingPassword ? (
          <div>
            <button
              onClick={() => setSecondModal(true)}
              className="font-sec rounded-full block px-3 py-1 text-xs border-teal-500 border-[1px] font-bold text-teal-500"
            >
              Add Trading Password
            </button>
          </div>
        ) : (
          <div>
            <button
              onClick={() => setSecondModal(true)}
              className="font-sec rounded-full block px-3 py-1 text-xs border-orange-500 border-[1px] font-bold text-orange-500"
            >
              Change Trading Password
            </button>
          </div>
        )}
      </div>
      <UserModal hide={hide} setHide={setHide} />
      <UserTradingModal
        hide={secondModal}
        setHide={setSecondModal}
        heading={isTradingPassword}
      />
    </>
  );
};

export default UserVerification;
