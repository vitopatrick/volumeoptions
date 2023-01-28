import { useTransactions } from "../../hooks/useTransactions";
import DepositItem from "./deposit-item";

const DepositHistory = () => {
  const { transactions, loading } = useTransactions("/deposits");

  return (
    <div className="mx-3">
      <div>
        <h4 className="font-sec py-4 font-bold text-xl font-paper hover:underline cursor-pointer">
          Deposit History
        </h4>
      </div>
      <div>
        {transactions.length <= 0 ? (
          <div className="font-semibold flex items-center justify-center my-8 text-base text-gray_bg">
            Opps Nothing here
          </div>
        ) : (
          <HistoryTable transactions={transactions} loading={loading} />
        )}
      </div>
    </div>
  );
};

const HistoryTable = ({ transactions }: any) => {
  return (
    <div>
      {/* parent div container */}
      <div className="grid grid-cols-4 justify-items-center bg-card p-2 font-sec font-bold rounded-t">
        <div className="justify-self-start">Coin</div>
        <div className="justify-self-start">Amount</div>
        <div className="justify-self-start">Status</div>
        <div className="justify-self-start">Date</div>
      </div>
      {/* children component */}
      {transactions.map((transaction: any) => (
        <DepositItem
          key={transaction.length + 1}
          coin={transaction.coin}
          amount={transaction.amount}
          approved={transaction.approved ? "Approved" : "Pending"}
          date={transaction.date}
        />
      ))}
    </div>
  );
};

export default DepositHistory;
