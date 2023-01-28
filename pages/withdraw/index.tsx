import WithdrawalForm from "../../components/transactions/withdrawal-form";
import WithdrawalHistory from "../../components/transactions/withdrawal-history";
import Layout from "../../shared/dashboard-layout/Layout";

const withdraw = () => {
  return (
    <Layout>
      <WithdrawalForm />
      <WithdrawalHistory />
    </Layout>
  );
};

export default withdraw;
