import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";

const DepositItem = ({ coin, amount, approved, date }: any) => {
  return (
    <div className="grid grid-cols-4 bg-card/20 px-2">
      <div className="py-2 uppercase">{coin}</div>
      <div className="py-2">{formatCurrency(amount)}</div>
      <div className="py-2">{approved}</div>
      <div className="py-2">{date} </div>
    </div>
  );
};

export default DepositItem;
