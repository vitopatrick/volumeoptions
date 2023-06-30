import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";

const HotCoinTable = ({ coins, loading }: any) => {
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div>
          <div className="flex items-center justify-between mt-3 bg-card py-3 px-2 rounded">
            <div className="text-neutral-400 font-semibold">Coin</div>
            <div className="text-neutral-400 font-semibold">Price</div>
          </div>
          {coins.map((coin: any) => (
            <div
              key={coin.id}
              className="flex items-center my-9 justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="w-[8%]">
                  <img src={coin.img} />
                </div>
                <h2 className="text-sm font-semibold">{coin.name}</h2>
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  {formatCurrency(coin.currentPrice, 4)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default HotCoinTable;
