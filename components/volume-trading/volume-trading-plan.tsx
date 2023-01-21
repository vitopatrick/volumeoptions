import { useMemo, useState } from "react";
import { tradingOptions } from "../../lib/trading-options";
import { formatCurrency } from "../../utils/formatCurrency";

interface OptionsType {
  id: number | undefined;
  level: String;
  minAmount: any;
  roi: String;
}

const VolumeTradingPlan = () => {
  // State of the select tag
  const [level, setLevel] = useState("level 1");

  const handleChange = (event: any) => {
    setLevel(event.target.value);
  };
  // state for Trading options
  const [options, setOptions] = useState<OptionsType | undefined>();
  useMemo(() => {
    const options = tradingOptions.find((tradingOption) =>
      tradingOption.level.match(level)
    );
    setOptions(options);
  }, [level]);

  return (
    <div className="bg-white p-4 rounded">
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
              <div className="bg-neutral-300 py-2 px-2 rounded">
                <select
                  value={level}
                  className="bg-transparent font-sec text-sm"
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
            <button className=" text-paper font-sec py-1 my-4 text-sm w-full px-3 capitalize rounded border-paper border-[1px]">
              Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolumeTradingPlan;
