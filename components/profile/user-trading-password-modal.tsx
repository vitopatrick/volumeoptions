import { AiFillHome } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { useContext, useRef, useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import { bucket, store } from "../../firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { BsEye, BsEyeSlash } from "react-icons/bs";

interface UserTradingModalTypes {
  hide: Boolean;
  setHide: any;
  heading: Boolean;
}

const UserTradingModal = ({
  hide,
  setHide,
  heading,
}: UserTradingModalTypes) => {
  const [tradingPassword, setTradingPassword] = useState("");
  const [isText, setIsText] = useState(false);

  const { user: state }: any = useContext(UserContext);
  const router = useRouter();

  // handle verification
  const submitVerification = async (e: any) => {
    // prevent Browser Default
    e.preventDefault();

    // check if the forms are Empty
    if (!tradingPassword) {
      toast("Please form correctly", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }
    try {
      // update the document
      const userRef = doc(store, "users", `${state.email}`);
      await updateDoc(userRef, {
        tradingPassword,
      });
      setHide(false);
      router.push("/account-profile");
    } catch (e: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-screen h-screen"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-bg rounded-md font-main relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-white text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="py-3 font-semibold text-white text-xl capitalize underline">
              {heading ? "Change Password" : "Add Trading Password"}
            </h2>
          </div>
          {/* form  */}
          <form>
            {/* enter address */}
            {/* password fieldset */}
            <div className="mt-4 flex flex-col">
              <label htmlFor="password" className="text-sm text-white">
                Password
              </label>
              <div className="flex items-center mt-3 bg-neutral-300 py-2 rounded">
                <input
                  type={isText ? "text" : "password"}
                  name="password"
                  id="password"
                  value={tradingPassword}
                  onChange={(e) => setTradingPassword(e.target.value)}
                  className="flex-1 bg-transparent outline-none py-1 pl-2"
                />
                <div className="pr-4">
                  {/* change type based on state changes */}
                  {isText ? (
                    <BsEye onClick={() => setIsText(!isText)} />
                  ) : (
                    <BsEyeSlash onClick={() => setIsText(!isText)} />
                  )}
                </div>
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={submitVerification}
              className="inline-block w-full mt-6 font-sec py-2 bg-card text-white rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserTradingModal;
