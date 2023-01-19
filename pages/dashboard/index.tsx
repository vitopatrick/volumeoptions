import DashboardLayout from "../../components/dashboard-components/dashboard-layout";
import WelcomeUser from "../../components/dashboard-components/user-welcome";
import Layout from "../../shared/dashboard-layout/Layout";

const DashboardPage = () => {
  return (
    <Layout>
      <WelcomeUser />
      <DashboardLayout />
    </Layout>
  );
};

export default DashboardPage;
