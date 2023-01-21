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
      <div className="mt-3 mb-8">
        <h1 className="font-sec font-bold text-4xl text-paper">Market</h1>
      </div>
      {/* table component */}
      <MarketTable />
    </Layout>
  );
};

export default MarketsPage;
