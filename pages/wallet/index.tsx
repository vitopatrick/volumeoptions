import WalletAccount from "../../components/wallet/wallet-accounts";
import WalletFaq from "../../components/wallet/wallet-faq";
import Layout from "../../shared/dashboard-layout/Layout";

const WalletPage = () => {
  return (
    <Layout>
      <WalletAccount />
      <WalletFaq />
    </Layout>
  );
};

export default WalletPage;
