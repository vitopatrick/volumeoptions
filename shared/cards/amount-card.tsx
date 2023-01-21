import React from "react";
import { formatCurrency } from "../../utils/formatCurrency";

interface AmountCardType {
  accountType: String;
  amount: Number | any;
}

const AmountCard = ({ accountType, amount }: AmountCardType) => {
  return (
    <div className="bg-white rounded font-sec w-full p-3">
      <div className="flex flex-col gap-3">
        <div>
          <h1 className="font-bold text-slate-600">{accountType}</h1>
        </div>
        <div>
          <h1 className="font-bold text-2xl text-paper">
            {formatCurrency(amount)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AmountCard;
