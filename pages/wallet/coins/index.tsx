import TotalCoinProvider from "../../../components/wallet/context/TotalCoinContext";
import WalletCoins from "../../../components/wallet/wallet-coins";
import Layout from "../../../shared/dashboard-layout/Layout";

const CoinsPage = () => {
  return (
    <TotalCoinProvider>
      <Layout>
        <WalletCoins />
      </Layout>
    </TotalCoinProvider>
  );
};

export default CoinsPage;
