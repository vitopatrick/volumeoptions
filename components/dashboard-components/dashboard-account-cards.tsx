import AmountCard from "../../shared/cards/amount-card";
import { useFetchUser } from "../../hooks/useFetchUser";

const DashboardAccountCards = () => {
  const { userState: user, loading }: any = useFetchUser();
  return (
    <>
      <div className="flex md:flex-row flex-col items-center justify-between gap-3 py-3 px-1">
        <AmountCard
          accountType={"Main Account"}
          amount={user?.MainAccount}
          loading={loading}
        />
        <AmountCard
          accountType={"Trading Account"}
          amount={user?.TradingAccount}
          loading={loading}
        />
      </div>
    </>
  );
};

export default DashboardAccountCards;
