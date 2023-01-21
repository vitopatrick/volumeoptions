import HotCoinTable from "./hotcoin-table";
import Loading from "../../shared/loading/Loading";
import { useFetchAllCoins } from "../../hooks/useFetchAllCoins";

const DashboardHotcoins = () => {
  const { coins, loading } = useFetchAllCoins(5);

  return (
    <div className="bg-white rounded flex-1 w-full self-start my-4">
      <div className="p-2">
        <div>
          <h1 className="font-sec font-bold text-xl text-paper">Market</h1>
        </div>
        {loading && <Loading />}
        {!loading && <HotCoinTable coins={coins} />}
      </div>
    </div>
  );
};

export default DashboardHotcoins;
