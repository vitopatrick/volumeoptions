import React from "react";
import WalletAccount from "../../components/wallet/wallet-accounts";
import WalletAddress from "../../components/wallet/wallet-addresses";
import Layout from "../../shared/dashboard-layout/Layout";

const WalletPage = () => {
  return (
    <Layout>
      <div>
        <h3 className="font-sec font-bold text-3xl py-3 text-paper">Wallet</h3>
      </div>
      {/* parent div container */}
      <div>
        {/* child div containers */}
        <WalletAccount />
        <WalletAddress />
      </div>
    </Layout>
  );
};

export default WalletPage;
