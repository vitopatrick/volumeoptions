import { Dispatch, SetStateAction } from "react";
import { FcBriefcase } from "react-icons/fc";
import { FiDollarSign } from "react-icons/fi";

interface ModalProps {
  visible: Boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
}

const StakingModal = ({ visible, setVisible }: ModalProps) => {
  return (
    <>
      {/* parent div positioned absolute */}
      <div
        className={
          visible
            ? "absolute top-0 left-0 backdrop-blur-sm bg-black/25 w-full h-full"
            : "hidden"
        }
        onClick={() => setVisible(false)}
      >
        {/* main div that will be center */}
        <div className="w-[80%] md:w-[40%] mx-auto my-12 bg-white rounded-md shadow-md p-4">
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
              <div className="flex items-center bg-neutral-200 py-3 px-1 rounded mt-2 gap-2">
                <input
                  type="number"
                  name="amount"
                  id="amount"
                  className="w-full bg-transparent focus:outline-none px-2"
                />
                <FiDollarSign />
              </div>
            </div>
            <button className="mt-4 inline-block w-full font-sec bg-paper text-white py-2 rounded">
              Stake Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StakingModal;
