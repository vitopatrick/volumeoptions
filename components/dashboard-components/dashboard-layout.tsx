import DashboardAccountCards from "./dashboard-account-cards";
import DashboardChart from "./dashboard-chart";
import DashboardHotcoins from "./dashboard-hotcoins";

const DashboardLayout = () => {

  return (
    <>
      <DashboardAccountCards />
      <div className="flex items-center gap-4 md:flex-row flex-col mx-1">
        <DashboardChart />
        <DashboardHotcoins />
      </div>
    </>
  );
};

export default DashboardLayout;
