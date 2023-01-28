import { Dispatch, SetStateAction, useContext, useMemo, useState } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { stakingOptions } from "../../lib/staking-options";
import DismissibleAlert from "../../shared/alerts/dismissible";
import { doc, updateDoc } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import { useFetchUser } from "../../hooks/useFetchUser";
import { formatCurrency } from "../../utils/formatCurrency";

interface ModalProps {
  visible: Boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const StakingModal = ({ visible, setVisible }: ModalProps) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [amount, setAmount] = useState<string | number | any>();
  const [plan, setPlan] = useState("Silver");
  const [selectedPlan, setSelectedPlan] = useState<any>();

  const { user }: any = useContext(UserContext);
  const { userState: state }: any = useFetchUser();

  const router = useRouter();

  const selectPlan = () => {
    const findPlan = stakingOptions.find((stakingOption) =>
      stakingOption.name.match(plan)
    );

    setSelectedPlan(findPlan);
  };

  useMemo(() => {
    selectPlan();
  }, [plan]);

  const updateStakingPlan = async (e: any) => {
    e.preventDefault();

    if (!amount) {
      setError("Amount Field Empty");
      setShow(true);
      return;
    }

    if (state.MainAccount < amount) {
      setError("Insufficient Balance");
      setShow(true);
      router.push("/deposit");
    }

    try {
      if (parseInt(amount) < selectedPlan.min) {
        setError(
          `Amount Should not be less than ${formatCurrency(selectedPlan.min)}`
        );
        setShow(true);
        return;
      }

      const docRef = doc(store, "users", `${user.email}`);

      await updateDoc(docRef, {
        StakingAccount: amount,
        plan,
      });

      router.push("/dashboard");
    } catch (error: unknown | any) {
      setError(error.code);
      setShow(true);
    }
  };

  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          visible
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto relative my-12 bg-card rounded-md shadow-md p-4">
          <div className="absolute top-0 right-0 p-2">
            <FaTimes onClick={() => setVisible(false)} />
          </div>
          {/* parent flex div */}
          <div className="flex flex-col justify-center items-start">
            <div className="mb-6 self-center">
              <FcBriefcase size="8rem" />
            </div>
            <div className="w-full">
              <label
                htmlFor="amount"
                className="font-sec my-2 text-neutral-400"
              >
                Enter Amount
              </label>
              <div className="flex items-center bg-gray_bg py-3 px-1 rounded mt-2 gap-2">
                <FiDollarSign className="stroke-bg" />
                <input
                  type="text"
                  name="amount"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-gray_bg text-bg focus:outline-none px-2"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="staking option"
                className="font-sec my-2 text-neutral-400"
              >
                Staking Option
              </label>
              <div className="flex items-center bg-gray_bg py-3 px-1 rounded mt-2 gap-2">
                <select
                  name="option"
                  id="option"
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                  className="w-full bg-gray_bg text-bg focus:outline-none px-2"
                >
                  {stakingOptions.map((stakingOption) => (
                    <option key={stakingOption.id} value={stakingOption.name}>
                      {stakingOption.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={updateStakingPlan}
              className="mt-4 inline-block w-full font-sec bg-bg text-white py-2 rounded"
            >
              Stake Now
            </button>
          </div>
        </div>
        <DismissibleAlert show={show} close={setShow} message={error} />
      </div>
    </>
  );
};

export default StakingModal;
