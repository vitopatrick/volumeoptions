import AmountCard from "../../shared/cards/amount-card";

const DashboardAccountCards = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-between gap-3 pr-3">
        <AmountCard accountType={"Main Account"} amount={5000} />
        <AmountCard accountType={"Trading Account"} amount={10000} />
      </div>
    </>
  );
};

export default DashboardAccountCards;
