import { FaTimes } from "react-icons/fa";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { doc, updateDoc } from "firebase/firestore";
import { store } from "../../firebase";
import { useRouter } from "next/router";

interface WalletModalTypes {
  hide: Boolean;
  setHide: any;
}

const WalletModal = ({ hide, setHide }: WalletModalTypes) => {
  const [btc, setBtc] = useState<string>("");
  const [eth, setEth] = useState<string>("");
  const [tron, setTron] = useState<string>("");
  const [usdt, setUsdt] = useState<string>("");
  const [sol, setSol] = useState<string>("");

  const { user }: any = useContext(UserContext);

  const router = useRouter();

  const updateWallet = async (e: any) => {
    e.preventDefault();
    try {
      const docRef = doc(store, "users", `${user.email}`);
      await updateDoc(docRef, {
        bitcoin: btc,
        ethereum: eth,
        solana: sol,
        tron,
        usdt,
      });

      router.push("/dashboard");
      setHide(false);
    } catch (error) {
      console.log(error);
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
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-card rounded-md relative shadow-md p-4">
          <div className="absolute top-0 right-0">
            <FaTimes
              className="text-bg text-4xl mx-4 mt-6 cursor-pointer"
              onClick={() => setHide(false)}
            />
          </div>
          <div>
            <h2 className="font-sec py-3 font-semibold text-xl capitalize underline underline-offset-2">
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
              <div className="bg-gray_bg flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="bitcoin"
                  id="bitcoin"
                  value={btc}
                  onChange={(e) => setBtc(e.target.value)}
                  className="w-full bg-gray_bg font-sec px-2 focus:outline-none"
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
              <div className="bg-gray_bg flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="eth_address"
                  id="eth_address"
                  value={eth}
                  onChange={(e) => setEth(e.target.value)}
                  className="w-full bg-gray_bg font-sec px-2 focus:outline-none"
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
              <div className="bg-gray_bg flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="usdt_trc_20"
                  id="usdt_trc_20"
                  value={usdt}
                  onChange={(e) => setUsdt(e.target.value)}
                  className="w-full bg-gray_bg font-sec px-2 focus:outline-none"
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
              <div className="bg-gray_bg flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="tron_trx"
                  id="tron_trx"
                  value={tron}
                  onChange={(e) => setTron(e.target.value)}
                  className="w-full bg-gray_bg font-sec px-2 focus:outline-none"
                />
              </div>
            </div>
            <div className="my-2">
              <label
                htmlFor="tron_trx"
                className="font-sec text-sm text-neutral-400"
              >
                Solana Address
              </label>
              <div className="bg-gray_bg flex py-2 items-center px-2 flex-row-reverse rounded-md">
                <input
                  type="text"
                  name="tron_trx"
                  id="tron_trx"
                  value={sol}
                  onChange={(e) => setSol(e.target.value)}
                  className="w-full bg-gray_bg font-sec px-2 focus:outline-none"
                />
              </div>
            </div>
            {/* submit button */}
            <button
              onClick={updateWallet}
              className="inline-block w-full mt-6 font-sec py-2 bg-bg text-white rounded"
            >
              Update Wallet
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default WalletModal;
