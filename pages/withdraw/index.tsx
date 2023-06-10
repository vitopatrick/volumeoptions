import WithdrawalForm from "../../components/transactions/withdrawal-form";
import WithdrawalHistory from "../../components/transactions/withdrawal-history";
import WithdrawalFaq from "../../components/withdrawal/WithdrawalFaq";
import Layout from "../../shared/dashboard-layout/Layout";

const withdraw = () => {
  return (
    <Layout>
      <div>
        <WithdrawalForm />
        <WithdrawalFaq />
      </div>
      <WithdrawalHistory />
    </Layout>
  );
};

export default withdraw;
