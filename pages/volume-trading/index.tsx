import React from "react";
import VolumeTradingContainer from "../../components/volume-trading/volume-trading-container";
import Layout from "../../shared/dashboard-layout/Layout";
import VolumeProvider from "../../components/volume-trading/context/VolumeContext";

const VolumeTradePage = () => {
  return (
    <Layout>
      <VolumeProvider>
        <VolumeTradingContainer />
      </VolumeProvider>
    </Layout>
  );
};

export default VolumeTradePage;
