import { faker } from "@faker-js/faker";
import { FaClipboard } from "react-icons/fa";

const DepositForm = () => {
  return (
    <>
      <div>
        <h1 className="text-xl font-sec py-5 font-bold text-paper">
          Deposit Coin
        </h1>
      </div>

      {/* parent grid container */}
      <div>
        <div className="mb-3 rounded font-sec text-sm p-3 bg-slate-100 text-paper capitalize border-paper border-[1px]">
          Ensure you check the network type you are making payment to choose the
          appropriate network below.
        </div>
        {/* barcode component */}
        <div className="flex-1 p-4 flex flex-col items-center">
          <div>
            <img
              src="https://insidebitcoins.com/wp-content/uploads/2020/03/Sfb0mlhPoB3YFephW0Zce1JIj6ZhcgTtyWDAvSmBGfYSpTR6Pio758K3fvx62a8e9cqJUvJRlVtNlVzWATvxM2XKlClTpkyZMmXK9Jz0fOq5eLPIsx4AAAAAElFTkSuQmCC.png"
              alt=""
            />
          </div>

          <div className="flex items-center gap-1 mt-2">
            <div>
              <h3 className="font-sec text-neutral-700">Address</h3>
              <p className="py-1 font-sec text-paper font-bold">
                {faker.finance.bitcoinAddress()}
              </p>
            </div>
            <div>
              <FaClipboard className="text-2xl mx-2 fill-paper cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between items-center w-[90%]  md:w-[30%]">
            <div className="my-2 ">
              <h3 className="font-sec text-neutral-700">Coin</h3>
              <p className="py-1 font-sec text-paper font-bold">BTC</p>
            </div>
            <div>
              <h3 className="font-sec text-neutral-700">Network</h3>
              <p className="py-1 font-sec text-paper font-bold">Bitcoin</p>
            </div>
          </div>
        </div>
        {/* end of barcode component */}
        {/* form component */}
        <div>
          {/* flex container for form inputs */}
          <div className="flex flex-col md:flex-row gap-2 items-start md:items-center justify-between">
            {/* amount field */}
            <div className="flex flex-col flex-1 mt-8 w-full">
              <label
                htmlFor="amount"
                className="md:text-sm text-gray-500 font-sec"
              >
                Amount
              </label>
              <div>
                <input
                  type="amount"
                  name="amount"
                  id="amount"
                  className="rounded my-3 font-sec text-base px-2 py-3  bg-gray-200/95 w-full   focus-within:outline-none"
                />
              </div>
            </div>
            {/* network */}
            <div className="flex flex-1 w-full flex-col mt-8">
              <label
                htmlFor="network"
                className="md:text-sm text-gray-500 font-sec"
              >
                Select network
              </label>
              <div className="w-full">
                <select className="rounded my-3 font-sec text-base px-2 py-3  bg-gray-200/95 w-full   focus-within:outline-none">
                  <option>Bitcoin</option>
                  <option>Ethereum</option>
                  <option>USDT ERC 20</option>
                  <option>USDT TRC 20</option>
                  <option>Tron</option>
                </select>
              </div>
            </div>
          </div>
          {/* end of form inputs container */}
          <button className="inline-block py-2 bg-paper px-6 font-bold text-white rounded text-sm my-3 font-sec">
            Deposit
          </button>
        </div>
        {/* end of form component */}
      </div>
      {/* end of parent container */}
    </>
  );
};

export default DepositForm;
