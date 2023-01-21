import { DataType } from "../../pages/market";
import Loading from "../loading/Loading";
import TableItem from "./TableItem";

interface TableProps {
  coins: any[];
  error: any;
  loading: Boolean;
}

const Table = ({ coins, error, loading }: TableProps) => {
  return (
    <div>
      {/* table Header */}
      <div className="font-sec grid grid-cols-5 bg-neutral-200 px-2 py-3 rounded-t-lg text-paper">
        <div className="font-bold col-span-2">Coin</div>
        <div className="font-bold text-left">Sym</div>
        <div className="font-bold text-left">24h</div>
        <div className="font-bold text-left">Price</div>
      </div>
      {/* table Body */}
      {loading && <Loading />}
      {coins.map((coin: DataType) => (
        <TableItem
          key={coin.id}
          name={coin.name}
          price={coin.currentPrice}
          change={coin.percentageChange}
          img={coin.img}
          symbol={coin.symbol}
        />
      ))}
    </div>
  );
};

export default Table;
