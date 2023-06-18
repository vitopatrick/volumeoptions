import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useState, useEffect, useRef } from "react";
import { UserContext } from "../../context/UserContext";
import { store } from "../../firebase";
import { useFetchUser } from "../../hooks/useFetchUser";
import { toast } from "react-toastify";
import { formatCurrency } from "../../utils/formatCurrency";
import TradingModal from "../../shared/modal/trading-modal";
import { profitCalculation } from "../../lib/calculate-profit";
import { VolumeContext } from "./context/VolumeContext";

const VolumeTradingPlan = () => {
  // State of the select tag
  const [amount, setAmount] = useState<number>(0);
  const [show, setShow] = useState(false);

  const router = useRouter();
  const { user: state }: any = useContext(UserContext);
  const { selectedCoin } = useContext(VolumeContext);
  const { userState }: any = useFetchUser();

  // function to add Orders
  async function addOrders(e: any) {
    if (amount > userState.TradingAccount) {
      return toast("Insufficient balance", {
        position: "bottom-center",
        bodyClassName: "toast",
        type: "error",
      });
    }
    try {
      // create the collection ref
      const orderRef = collection(store, "users", `${state.email}`, "orders");

      const profit = profitCalculation(+amount);
      //removed and update the amount from the Main Balance
      const tradingAccount = userState.MainAccount - amount;
      // update account
      const userRef = doc(store, "/users", `${state.email}`);
      await updateDoc(userRef, {
        TradingAccount: tradingAccount,
      });
      // create Collection and then reload page or refresh page
      await addDoc(orderRef, {
        coin: selectedCoin.name,
        amount,
        date: serverTimestamp(),
        profit,
      });
      await fetch("/api/trade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: state.email,
          amount,
          coin: selectedCoin.name,
        }),
      });
      router.reload();
    } catch (error) {
      return toast("Could not Perform Trade", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  }

  return (
    <>
      <div className="bg-bg text-white font-main p-4 rounded">
        {/* parent container */}
        <div>
          {/* child content */}
          <div className="flex flex-col gap-4">
            {/* header component */}
            <div className="mb-4">
              <h3 className="pt-2 pb-1 text-xl font-bold">Call Trade</h3>
              <p className="text-sm text-neutral-400 capitalize">
                select your trading options
              </p>
            </div>
            {/* form component */}
            <div>
              <div>
                <div className="mt-3 space-y-3">
                  <div className="flex flex-col ">
                    <label
                      htmlFor="amount"
                      className="font-semibold text-neutral-500 py-2 text-sm"
                    >
                      Enter Amount
                    </label>
                    <input
                      type="number"
                      name="amount"
                      id="amount"
                      value={amount}
                      onChange={(e: any) => setAmount(e.target.value)}
                      className="bg-neutral-400 py-3 px-2 rounded text-black outline-none"
                    />
                  </div>
                </div>
                <div className="my-3">
                  <p className="text-sm font-semibold text-neutral-500">
                    Minimum Trading Amount
                  </p>
                  <h4 className="my-1 font-semibold">{formatCurrency(300)}</h4>
                </div>
              </div>
            </div>
            {/* end of form component */}
            {/* button */}
            <div>
              <button
                onClick={() => setShow(true)}
                className="font-bold py-3 my-4 text-sm w-full px-3 uppercase rounded text-black bg-teal-400"
              >
                Call
              </button>
            </div>
          </div>
        </div>
      </div>
      <AboutCoin />
      <TradingModal hide={show} setHide={setShow} tradingFunction={addOrders} />
    </>
  );
};

function AboutCoin() {
  const { selectedCoin } = useContext(VolumeContext);

  useEffect(() => {}, []);

  return <div>this is the about card</div>;
}

export default VolumeTradingPlan;
