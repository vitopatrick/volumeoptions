import { useState } from "react";
import UserModal from "./user-verification-modal";

const UserVerification = () => {
  const [hide, setHide] = useState(false);
  const [modalTwo, setModalTwo] = useState(false);

  return (
    <>
      <div className="flex items-center gap-2 px-3">
        <div className="my-4">
          <button
            onClick={() => setHide(true)}
            className="font-sec rounded-full block px-3 py-1 text-xs border-teal-500 border-[1px] text-teal-500"
          >
            Start verification
          </button>
        </div>
      </div>
      <UserModal hide={hide} setHide={setHide} />
    </>
  );
};

export default UserVerification;
