import WithdrawalForm from "../../components/withdrawal/WithdrawalForm";
import WithdrawalFaq from "../../components/withdrawal/WithdrawalFaq";
import Layout from "../../shared/dashboard-layout/Layout";
import WithdrawalHistory from "../../components/withdrawal/WithdrawalHistory";

const withdraw = () => {
  return (
    <Layout>
      <div className="text-white flex">
        <WithdrawalForm />
        <WithdrawalFaq />
      </div>
      <WithdrawalHistory />
    </Layout>
  );
};

export default withdraw;
