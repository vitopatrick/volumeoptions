import React from "react";
import MarketTable from "../../market-table/market-table";

const TrendingCoinsTable = () => {
  return (
    <section className="h-screen">
      <div className="w-[90%] mx-auto">
        <div className="text-center py-3 font-main text-2xl md:text-4xl font-medium">
          Explore the Latest Market Update
        </div>
        <MarketTable />
      </div>
    </section>
  );
};

export default TrendingCoinsTable;
