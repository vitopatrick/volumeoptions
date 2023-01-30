import Navbar from "../../components/landing-page/nav-bar";
import Footer from "../../components/landing-page/footer/Footer";
import RiskBody from "../../components/risk/risk-body";

const RiskPage = () => {
  return (
    <div className="bg-bg text-white font-main">
      <Navbar />
      <RiskBody />
      <Footer />
    </div>
  );
};

export default RiskPage;
