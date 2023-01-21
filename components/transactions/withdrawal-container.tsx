import React from "react";
import WithdrawalForm from "./withdrawal-form";
import WithdrawalHistory from "./withdrawal-history";

const WithdrawalContainer = () => {
  return (
    <div>
      <div>
        <h4 className="font-sec font-bold py-3 text-2xl text-paper">
          Withdraw Coin
        </h4>
      </div>
      <div>
        <WithdrawalForm />
        <WithdrawalHistory />
      </div>
    </div>
  );
};

export default WithdrawalContainer;
