import DepositForm from "../../components/transactions/deposit-form";
import DepositHistory from "../../components/transactions/deposit-history";
import Layout from "../../shared/dashboard-layout/Layout";

const index = () => {
  return (
    <Layout>
      <DepositForm />
      <DepositHistory />
    </Layout>
  );
};

export default index;
