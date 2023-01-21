import { FaTimes } from "react-icons/fa";

interface WalletModalTypes {
  hide: Boolean;
  setHide: any;
}

const WalletModal = ({ hide, setHide }: WalletModalTypes) => {
  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          hide
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-white rounded-md  relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-paper text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="font-sec py-3 font-semibold text-paper text-xl capitalize underline underline-offset-2">
              Update Wallet Address
            </h2>
          </div>
          {/* form  */}
          <form>
            {/* enter address */}
            <div className="my-2">
              <label
                htmlFor="bitcoin address"
                className="font-sec text-sm text-neutral-400"
              >
                Bitcoin Address
              </label>
              <div className="bg-neutral-200 flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="bitcoin"
                  id="bitcoin"
                  className="w-full bg-transparent font-sec px-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="my-2">
              <label
                htmlFor="address"
                className="font-sec text-sm text-neutral-400"
              >
                Ethereum Address
              </label>
              <div className="bg-neutral-200 flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="eth_address"
                  id="eth_address"
                  className="w-full bg-transparent font-sec px-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="my-2">
              <label
                htmlFor="usdt_trc 20"
                className="font-sec text-sm text-neutral-400"
              >
                USDT TRC 20 Address
              </label>
              <div className="bg-neutral-200 flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="usdt_trc_20"
                  id="usdt_trc_20"
                  className="w-full bg-transparent font-sec px-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="my-2">
              <label
                htmlFor="tron_trx"
                className="font-sec text-sm text-neutral-400"
              >
                Tron TRX Address
              </label>
              <div className="bg-neutral-200 flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="tron_trx"
                  id="tron_trx"
                  className="w-full bg-transparent font-sec px-2 focus:outline-none"
                />
              </div>
            </div>
            {/* submit button */}
            <button className="inline-block w-full mt-6 font-sec py-2 bg-paper text-white rounded">
              Update Wallet
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WalletModal;
