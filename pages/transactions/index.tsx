import { useState } from "react";
import Layout from "../../shared/dashboard-layout/Layout";
import DepositContainer from "../../components/transactions/deposit-container";
import WithdrawalContainer from "../../components/transactions/withdrawal-container";

const TransactionsPage = () => {
  const [current, setCurrent] = useState<String>("tab1");

  const changeTab = (tab: String) => {
    setCurrent(tab);
  };

  return (
    <Layout>
      <div>
        <h1 className="my-1 font-sec font-bold text-3xl">Transactions</h1>
      </div>
      <div className="flex items-center font-sec gap-2 mt-4 text-paper">
        <button
          className={
            current === "tab1"
              ? "bg-neutral-100 py-1 px-4 rounded-lg font-bold text-sm"
              : "text-sm"
          }
          onClick={() => changeTab("tab1")}
        >
          Deposit
        </button>
        <button
          onClick={() => changeTab("tab2")}
          className={
            current === "tab2"
              ? "bg-neutral-100 py-1 px-4 rounded-lg text-sm font-bold"
              : "text-sm"
          }
        >
          Withdraw
        </button>
      </div>
      {current === "tab1" && <DepositContainer />}
      {current === "tab2" && <WithdrawalContainer />}
    </Layout>
  );
};

export default TransactionsPage;
