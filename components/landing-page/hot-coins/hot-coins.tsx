import React from "react";
import { useFetchAllCoins } from "../../../hooks/useFetchAllCoins";
import Loading from "../../../shared/loading/Loading";
import { formatCurrency } from "../../../utils/formatCurrency";

const TrendingCoinsTable = () => {
  const { coins, loading } = useFetchAllCoins(6);

  return (
    <section className="text-white mt-12">
      <div className="w-[90%] mx-auto">
        <div className="text-center py-3 font-main text-xl md:text-4xl font-bold">
          Explore the Latest Market Update
        </div>
        {loading && <Loading />}
        {!loading && <CoinTable coins={coins} />}
      </div>
    </section>
  );
};

const CoinTable = ({ coins }: any) => {
  console.log(coins);
  return (
    <div className="font-main font-bold mt-5">
      <div className="grid grid-cols-5 gap-2 justify-self-center bg-card py-3 px-2 rounded-t-md">
        <div className="col-span-2">Coin</div>
        <div className="hidden md:block">Sym</div>
        <div>24h</div>
        <div>Price</div>
      </div>
      <div className="grid grid-cols-5 bg-card/25 px-2">
        {coins.map((coin: any) => (
          <>
            <div className="py-3 col-span-2 flex gap-4 items-center">
              <div className="w-[12%] md:w-[6%]">
                <img src={coin.img} alt={coin.name} />
              </div>
              <div className="font-bold text-paper">{coin.name}</div>
            </div>
            <div className=" py-3 font-bold text-paper uppercase hidden md:block">
              {coin.symbol}
            </div>
            <div
              className={
                coin.percentageChange < 0
                  ? "py-5 text-red-500"
                  : "py-5 text-teal-500"
              }
            >
              {coin.percentageChange.toFixed(2)}%
            </div>
            <div className="font-medium py-5">
              {formatCurrency(coin.currentPrice)}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default TrendingCoinsTable;
