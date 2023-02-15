import { useOrders } from "../../hooks/useOrders";
import Loading from "../../shared/loading/Loading";
import { formatCurrency } from "../../utils/formatCurrency";

const VolumeOrderBook = () => {
  const { orders } = useOrders();

  return (
    <div className="text-white">
      <h1 className="text-xl font-sec py-4 font-bold text-paper">Order book</h1>
      <div className="font-sec grid grid-cols-5 md:grid-cols-6 justify-items-center py-2 px-2 bg-bg rounded-t font-semibold">
        <div className="justify-self-start">Coin</div>
        <div className="justify-self-start">Amount</div>
        <div className="justify-self-start">Start</div>
        <div className="justify-self-start hidden md:block">Level</div>
        <div className="justify-self-start">Profit</div>
        <div className="justify-self-start">End</div>
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
  console.log(orders);
  return (
    <>
      {loading && <Loading />}
      {!loading &&
        orders.map((order: any) => (
          <VolumeOrderTableItem
            coin={order.coin}
            amount={order.amount}
            end={order.end}
            level={order.level ? order.level : "N/A"}
            profit={order.profit}
            start={order.date}
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
  end,
  level,
  profit,
  start,
}: any) => {
  return (
    <>
      <div className="grid grid-cols-5 md:grid-cols-6 font-sec font-medium py-2 px-2 bg-bg/50">
        <div>{coin}</div>
        <div>{formatCurrency(amount)}</div>
        <div>{start}</div>
        <div className="hidden md:block">{level}</div>
        <div>{formatCurrency(profit)}</div>
        <div>{end}</div>
      </div>
    </>
  );
};

export default VolumeOrderBook;
