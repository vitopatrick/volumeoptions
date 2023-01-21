import { useState } from "react";
import { faker } from "@faker-js/faker";
import Alert from "../../shared/alerts/Alert";
import WalletModal from "./wallet-modal";

const WalletAddress = () => {
  const [hide, setHide] = useState(false);

  const showModal = () => {
    setHide(true);
  };

  return (
    <>
      <div>
        <Alert message="click on the add button to add or update your withdrawal wallet addresses" />
        <div className="flex justify-between flex-col md:flex-row mb-4 gap-2">
          <div>
            <h1 className="font-sec font-bold text-paper my-1">Bitcoin</h1>
            <h2 className="font-sec">{faker.finance.bitcoinAddress()}</h2>
          </div>
          <div>
            <h1 className="font-sec font-bold text-paper my-1">USDT ERC 20</h1>
            <h2 className="font-sec">{faker.finance.ethereumAddress()}</h2>
          </div>
          <div>
            <h1 className="font-sec font-bold text-paper my-1">USDT TRC 20</h1>
            <h2 className="font-sec">{faker.finance.ethereumAddress()}</h2>
          </div>
        </div>
        <div className="my-3 flex gap-2 flex-col md:flex-row justify-between">
          <div>
            <h1 className="font-sec font-bold text-paper my-1">Ethereum ETH</h1>
            <h2 className="font-sec">{faker.finance.ethereumAddress()}</h2>
          </div>
          <div>
            <h1 className="font-sec font-bold text-paper my-1">Solana SOL</h1>
            <h2 className="font-sec">{faker.finance.ethereumAddress()}</h2>
          </div>
          <div>
            <h1 className="font-sec font-bold text-paper my-1">Tron TRX</h1>
            <h2 className="font-sec">{faker.finance.litecoinAddress()}</h2>
          </div>
        </div>

        <button
          onClick={showModal}
          className="my-4 text-paper py-3 px-4 bg-neutral-100 rounded-full font-sec font-bold"
        >
          Update Address
        </button>
      </div>
      <WalletModal hide={hide} setHide={setHide} />
    </>
  );
};

export default WalletAddress;
