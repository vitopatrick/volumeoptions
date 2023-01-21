import React from "react";
import Staking from "../../components/staking/Staking";
import Layout from "../../shared/dashboard-layout/Layout";

const StakingPage = () => {
  return (
    <Layout>
      <div className="my-6">
        <h1 className="text-3xl font-sec text-paper font-bold">
          Staking Options
        </h1>
      </div>
      <div className="my-4">
        <Staking />
      </div>
    </Layout>
  );
};

export default StakingPage;
