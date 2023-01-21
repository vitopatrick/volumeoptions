import Layout from "../../shared/dashboard-layout/Layout";
import MarketTable from "../../components/market-table/market-table";

export interface DataType {
  id: String | number | any;
  name: String;
  img: String;
  currentPrice: Number;
  percentageChange: Number;
  symbol: String;
}

const MarketsPage = () => {
  return (
    <Layout>
      {/* table component */}
      <MarketTable />
    </Layout>
  );
};

export default MarketsPage;
