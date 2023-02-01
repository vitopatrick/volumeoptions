import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { store } from "../../firebase";
import { useFetchUser } from "../../hooks/useFetchUser";
import { tradingOptions } from "../../lib/trading-options";
import { toast } from "react-toastify";
import { formatCurrency } from "../../utils/formatCurrency";
import TradingModal from "../../shared/modal/trading-modal";

const VolumeTradingPlan = () => {
  // State of the select tag
  const [level, setLevel] = useState("level 1");
  const [show, setShow] = useState(false);

  const handleChange = (event: any) => {
    setLevel(event.target.value);
  };

  // state for Trading options
  const [options, setOptions] = useState<any | undefined>();

  useMemo(() => {
    const options = tradingOptions.find((tradingOption) =>
      tradingOption.level.match(level)
    );
    setOptions(options);
  }, [level]);

  const router = useRouter();
  const { user: state, coin }: any = useContext(UserContext);
  const { userState }: any = useFetchUser();

  // function to add Orders
  const addOrders = async (e: any) => {
    if (userState.MainAccount < options.minAmount) {
      toast("Insufficient balance,please deposit", {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
      return;
    }

    try {
      const orderRef = collection(store, "users", `${state.email}`, "orders");
      const userRef = doc(store, "users", `${state.email}`);
      const interest = (options.minAmount * options.roi) / 100;

      const profit = interest + options.minAmount;

      await addDoc(orderRef, {
        coin,
        amount: options.minAmount,
        duration: "4 days",
        profit,
        level: options.level,
        date: serverTimestamp(),
      });

      await updateDoc(userRef, {
        MainAccount: userState.MainAccount - options.minAmount,
        TradingAccount: userState.TradingAccount + options.minAmount,
      });

      setShow(false);
      router.reload()
    } catch (error: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <div className="bg-bg text-white font-main flex-2 p-4 rounded">
      {/* parent container */}
      <div>
        {/* child content */}
        <div className="flex flex-col gap-4">
          {/* header component */}
          <div className="mb-4">
            <h3 className="pt-2 pb-1 text-xl font-bold">Trading Options</h3>
            <p className="text-sm">select your appropriate trading plan ...</p>
          </div>
          {/* form component */}
          <div>
            <div>
              <label
                htmlFor="trading options"
                className="text-sm font-bold mb-6"
              >
                Options
              </label>
              <div className="bg-card py-2 px-2 rounded mt-2 w-full">
                <select
                  value={level}
                  className="bg-card text-white outline-none text-sm w-full"
                  onChange={handleChange}
                >
                  {tradingOptions.map((option) => (
                    <option
                      key={option.id}
                      value={option.level}
                      id={option.level}
                    >
                      {option.level}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="font-sec">
                  <h4 className="font-bold text-neutral-500 text-sm">
                    Trading Level
                  </h4>
                  <h3 className="font-bold text-paper">{options?.level}</h3>
                </div>
                <div className="font-sec">
                  <h4 className="font-bold text-neutral-500 text-sm">
                    Minimum Amount
                  </h4>
                  <h3 className="font-bold text-paper">
                    {formatCurrency(options?.minAmount)}
                  </h3>
                </div>
                <div className="font-sec">
                  <h4 className="font-bold text-neutral-500 text-sm">
                    Duration
                  </h4>
                  <h3 className="font-bold text-paper">4 days</h3>
                </div>
              </div>
            </div>
          </div>
          {/* end of form component */}
          {/* button */}
          <div>
            <button
              onClick={() => setShow(true)}
              className=" text-paper font-sec py-1 my-4 text-sm w-full px-3 capitalize rounded border-paper border-[1px]"
            >
              Call
            </button>
          </div>
        </div>
      </div>
      <TradingModal hide={show} setHide={setShow} tradingFunction={addOrders} />
    </div>
  );
};

export default VolumeTradingPlan;
