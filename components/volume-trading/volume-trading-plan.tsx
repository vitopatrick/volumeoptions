import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useContext, useMemo, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { store } from "../../firebase";
import { useFetchUser } from "../../hooks/useFetchUser";
import { calculateProfit } from "../../lib/calculate-profit";
import { tradingOptions } from "../../lib/trading-options";
import DismissibleAlert from "../../shared/alerts/dismissible";
import { formatCurrency } from "../../utils/formatCurrency";

const VolumeTradingPlan = () => {
  // State of the select tag
  const [level, setLevel] = useState("level 1");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

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
      setError("Insufficient Account");
      setShow(true);
      return;
    }

    e.preventDefault();
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
        TradingAccount: userState.TradingAccount + options.minAmount,
      });

      router.push("/dashboard");
    } catch (error: any) {
      setError(error.code);
      setShow(true);
    }
  };

  return (
    <div className="bg-card flex-2 p-4 rounded">
      {/* parent container */}
      <div>
        {/* child content */}
        <div className="flex flex-col gap-4">
          {/* header component */}
          <div className="mb-4">
            <h3 className="pt-2 pb-1 font-sec text-paper text-xl font-bold">
              Trading Options
            </h3>
            <p className="font-sec text-sm text-neutral-400">
              select your appropriate trading plan ...
            </p>
          </div>
          {/* form component */}
          <div>
            <div>
              <label
                htmlFor="trading options"
                className="font-sec text-sm font-bold text-neutral-500 mb-6"
              >
                Options
              </label>
              <div className="bg-bg py-2 px-2 rounded mt-2 w-full">
                <select
                  value={level}
                  className="bg-bg  outline-none font-sec text-sm w-full"
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
              onClick={addOrders}
              className=" text-paper font-sec py-1 my-4 text-sm w-full px-3 capitalize rounded border-paper border-[1px]"
            >
              Call
            </button>
          </div>
        </div>
      </div>
      <DismissibleAlert show={show} close={setShow} message={error} />
    </div>
  );
};

export default VolumeTradingPlan;
