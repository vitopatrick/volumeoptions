import { SkeletonCircle, SkeletonText } from "../../shared/skeleton/Skeleton";
import { formatCurrency } from "../../utils/formatCurrency";

const HotCoinTable = ({ coins, loading }: any) => {
  return (
    <div>
      <div className="flex items-center justify-between mt-3 bg-bg/50 py-3 px-2 rounded">
        <div className="font-sec font-bold text-paper">Coin</div>
        <div className="font-sec font-bold text-paper">Price</div>
      </div>
      {coins.map((coin: any) => (
        <div key={coin.id} className="flex items-center my-9 justify-between">
          <div className="flex items-center gap-2">
            {loading && <SkeletonCircle width={30} height={30} />}
            {!loading && (
              <div className="w-[8%]">
                <img src={coin.img} />
              </div>
            )}
            {loading && <SkeletonText height={20} width={100} />}
            {!loading && (
              <h2 className="font-sec text-paper font-bold">{coin.name}</h2>
            )}
          </div>
          <div>
            {loading && <SkeletonText height={20} width={100} />}
            {!loading && (
              <h3 className="font-sec text-paper font-bold">
                {formatCurrency(coin.currentPrice)}
              </h3>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HotCoinTable;
