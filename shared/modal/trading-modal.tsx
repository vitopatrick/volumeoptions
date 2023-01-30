import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useFetchUser } from "../../hooks/useFetchUser";

const TradingModal = ({ hide, setHide, tradingFunction }: any) => {
  const [tradingPassword, setTradingPassword] = useState<string>("");
  const { userState: user }: any = useFetchUser();

  const modalFunction = async (e: any) => {
    e.preventDefault();
    if (!tradingPassword) {
      return toast("Please Enter Trading Password", {
        type: "error",
        bodyClassName: "toast",
        position: "bottom-center",
      });
    }
    if (!user?.tradingPassword) {
      return toast("Please create a secure password", {
        type: "error",
        bodyClassName: "toast",
        position: "bottom-center",
      });
    }
    if (tradingPassword != user?.tradingPassword) {
      return toast("password Incorrect", {
        type: "error",
        bodyClassName: "toast",
        position: "bottom-center",
      });
    }
    tradingFunction();
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
        <div className="w-[80%] text-white font-main md:w-[40%] mx-auto my-12 bg-bg rounded-md relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-white text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="font-sec py-3 font-semibold text-xl capitalize underline underline-offset-2">
              Enter Trading Password
            </h2>
          </div>
          {/* form  */}
          <form>
            <div className="my-4">
              <label htmlFor="enter address">Enter Trading Password</label>
              <div className="bg-neutral-300 rounded py-2">
                <input
                  type="text"
                  name="tradingPassword"
                  id="tradingPassword"
                  value={tradingPassword}
                  className="bg-transparent outline-none text-bg px-2"
                  onChange={(e) => setTradingPassword(e.target.value)}
                />
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={modalFunction}
              type="submit"
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

export default TradingModal;
