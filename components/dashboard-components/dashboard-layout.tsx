import Chart from "../../shared/charts/Chart";
import DashboardAccountCards from "./dashboard-account-cards";
import DashboardHotcoins from "./dashboard-hotcoins";

const DashboardLayout = () => {
  return (
    <>
      <DashboardAccountCards />
      <div className="flex md:items-center gap-4 md:flex-row flex-col mx-2">
        <Chart />
        <DashboardHotcoins />
      </div>
    </>
  );
};

export default DashboardLayout;
