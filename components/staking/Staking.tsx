import { stakingOptions } from "../../lib/staking-options";
import StakingModal from "./staking-modal";
import { useState } from "react";

const Staking = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="md:grid grid-cols-3 gap-3">
        {/* children div for the grid component */}
        {stakingOptions.map((opt) => (
          <div
            key={opt.id}
            className="bg-white p-4 rounded shadow my-4 md:my-0"
          >
            {/* header (name and apr) */}
            <div className="flex items-baseline gap-3 mb-4">
              <h4 className="font-sec text-base font-semibold">{opt.name}</h4>
              <span className="text-2xl text-teal-800 font-semibold">
                {opt.apr}
              </span>
            </div>
            {/*  body duration and range */}

            <div className="my-4 flex items-center gap-3 font-sec">
              <p className="font-semibold text-paper">Duration</p>
              <p className="font-bold text-paper">{opt.duration}</p>
            </div>

            <div>
              <p className="font-sec text-2xl font-bold text-paper">
                {opt.range}
              </p>
            </div>
            <button
              onClick={() => setVisible(true)}
              className="mt-4 mb-2 font-sec inline-block bg-paper py-1 rounded text-white  w-full hover:bg-bg"
            >
              Stake now
            </button>
          </div>
        ))}
      </div>
      <StakingModal visible={visible} setVisible={setVisible} />
    </>
  );
};

export default Staking;
