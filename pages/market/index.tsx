import Layout from "../../shared/dashboard-layout/Layout";
import MarketTable from "../../components/market-table/market-table";
import { useAuth } from "../../hooks/useAuth";

export interface DataType {
  id: String | number | any;
  name: String;
  img: String;
  currentPrice: Number;
  percentageChange: Number;
  symbol: String;
}

const MarketsPage = () => {
  // call the auth hook
  useAuth();
  return (
    <Layout>
      {/* table component */}
      <MarketTable />
    </Layout>
  );
};

export default MarketsPage;
