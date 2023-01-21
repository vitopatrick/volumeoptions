import React from "react";
import Staking from "../../components/staking/Staking";
import Layout from "../../shared/dashboard-layout/Layout";

const StakingPage = () => {
  return (
    <Layout>
      <div className="my-4">
        <Staking />
      </div>
    </Layout>
  );
};

export default StakingPage;
