import { useState } from "react";
import UserChangeDetails from "./user-change-details-modal";
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
        {/* <div className="my-4">
          <button
            onClick={() => setModalTwo(true)}
            className="font-sec rounded-full block px-3 py-1 text-xs border-red-500 border-[1px] text-red-500"
          >
            Change Details
          </button>
        </div> */}
      </div>

      <UserModal hide={hide} setHide={setHide} />
      <UserChangeDetails open={modalTwo} setOpen={setModalTwo} />
    </>
  );
};

export default UserVerification;
