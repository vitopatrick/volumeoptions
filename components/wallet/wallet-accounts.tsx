import React from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import AmountCard from "../../shared/cards/amount-card";

const WalletAccount = () => {
  const { userState: state, loading }: any = useFetchUser();

  return (
    <div className="flex flex-col md:flex-row gap-4 my-4 mx-2">
      <AmountCard
        amount={state?.TradingAccount}
        accountType={"Trading Account"}
        loading={loading}
      />
      <AmountCard
        amount={state?.StakingAccount ? state?.StakingAccount : 0}
        accountType={"Staking Account"}
        loading={loading}
      />
      <AmountCard
        amount={state?.MainAccount}
        accountType={"Main Account"}
        loading={loading}
      />
    </div>
  );
};

export default WalletAccount;
