import DashboardAccountCards from "./dashboard-account-cards";
import DashboardChart from "./dashboard-chart";
import DashboardHotcoins from "./dashboard-hotcoins";
import WelcomeUser from "./user-welcome";

const DashboardLayout = () => {
  return (
    <>
      <WelcomeUser />
      <DashboardAccountCards />
      <div className="flex items-center gap-4 md:flex-row flex-col">
        <DashboardChart />
        <DashboardHotcoins />
      </div>
    </>
  );
};

export default DashboardLayout;
