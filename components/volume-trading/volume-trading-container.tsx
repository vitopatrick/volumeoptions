import React from "react";
import Chart from "../../shared/charts/Chart";
import VolumeOrderBook from "./volume-order-book";
import VolumeTradingPlan from "./volume-trading-plan";

const VolumeTradingContainer = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 md:flex-row md:items-center mb-4">
        <Chart />
        <VolumeTradingPlan />
      </div>
      <VolumeOrderBook />
    </div>
  );
};

export default VolumeTradingContainer;
