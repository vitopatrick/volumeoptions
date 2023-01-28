import { useOrders } from "../../hooks/useOrders";
import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";

const VolumeOrderBook = () => {
  const { orders } = useOrders();
  return (
    <div>
      <h1 className="text-xl font-sec py-4 font-bold text-paper">Order book</h1>
      <div className="font-sec grid grid-cols-5 justify-items-center py-2 px-2 bg-card rounded-t font-semibold">
        <div className="justify-self-start">Coin</div>
        <div className="justify-self-start">Amount</div>
        <div className="justify-self-start">Duration</div>
        <div className="justify-self-start">Level</div>
        <div className="justify-self-start">Profit</div>
      </div>
      {orders.length > 0 ? (
        <VolumeTable />
      ) : (
        <div className="font-semibold flex items-center justify-center my-8 text-base text-gray_bg">
          Opps Nothing here
        </div>
      )}
    </div>
  );
};

const VolumeTable = () => {
  const { orders, loading } = useOrders();
  return (
    <>
      {orders.map((order: any) => (
        <VolumeOrderTableItem
          coin={order.coin}
          amount={order.amount}
          duration={order.duration}
          level={order.level ? order.level : "N/A"}
          profit={order.profit}
          loading={loading}
          key={order.amount + Math.random()}
        />
      ))}
    </>
  );
};

const VolumeOrderTableItem = ({
  coin,
  amount,
  duration,
  level,
  profit,
  loading,
}: any) => {
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <div className="grid grid-cols-5 font-sec font-medium py-2 px-2 bg-card/25">
          <div>{coin}</div>
          <div>{formatCurrency(amount)}</div>
          <div>{duration}</div>
          <div>{level}</div>
          <div>{formatCurrency(profit)}</div>
        </div>
      )}
    </>
  );
};

export default VolumeOrderBook;
