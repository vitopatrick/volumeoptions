import { useFetchAllCoins } from "../../../hooks/useFetchAllCoins";

const TrendingCoins = () => {
  const { coins, loading } = useFetchAllCoins(4);

  return (
    <div className="w-[80%] mx-auto hidden md:block">
      <div className="py-3 px-5 w-full bg-card rounded">
        <div className="flex justify-evenly items-center">
          {coins.map((coin: any) => (
            <div>
              <div className="w-[15%]">
                <img src={coin.img} alt={coin.name} />
              </div>
              <div className="font-main flex items-center gap-2 mt-2 mb-1">
                <h3 className="font-medium text-xl">{coin.name} </h3>
                <h4 className="text-sm font-medium">({coin.symbol})</h4>
              </div>
              <div>
                <h4
                  className={
                    coin.percentageChange < 0 ? "text-red-500" : "text-teal-500"
                  }
                >
                  {coin.percentageChange.toFixed(2)}%
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCoins;
