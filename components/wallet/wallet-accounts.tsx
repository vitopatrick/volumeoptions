import React from "react";
import AmountCard from "../../shared/cards/amount-card";

const WalletAccount = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-4">
      <AmountCard amount={5000} accountType={"Trading Account"} />
      <AmountCard amount={2000} accountType={"Staking Account"} />
      <AmountCard amount={10000} accountType={"Main Account"} />
    </div>
  );
};

export default WalletAccount;
