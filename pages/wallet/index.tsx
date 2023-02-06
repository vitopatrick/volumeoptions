import WalletAccount from "../../components/wallet/wallet-accounts";
import WalletAddress from "../../components/wallet/wallet-addresses";
import WalletCoins from "../../components/wallet/wallet-coins";
import Layout from "../../shared/dashboard-layout/Layout";

const WalletPage = () => {
  return (
    <Layout>
      <WalletAccount />
      <WalletCoins />
      <WalletAddress />
    </Layout>
  );
};

export default WalletPage;
