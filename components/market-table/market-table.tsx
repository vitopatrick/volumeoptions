import { useFetchAllCoins } from "../../hooks/useFetchAllCoins";
import Table from "../../shared/table/Table";

const MarketTable = () => {
  const { coins, error, loading } = useFetchAllCoins(6);

  return (
    <>
      <Table coins={coins} error={error} loading={loading} />
    </>
  );
};

export default MarketTable;
