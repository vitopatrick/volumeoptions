import HotCoinTable from "./hotcoin-table";
import { useFetchAllCoins } from "../../hooks/useFetchAllCoins";

const DashboardHotcoins = () => {
  const { coins, loading } = useFetchAllCoins(4);

  return (
    <div className="bg-bg rounded font-main text-white flex-1 w-full self-start">
      <div className="p-2">
        <div>
          <h1 className="font-sec font-bold text-xl text-paper">Market</h1>
        </div>
        <HotCoinTable coins={coins} loading={loading} />
      </div>
    </div>
  );
};

export default DashboardHotcoins;
