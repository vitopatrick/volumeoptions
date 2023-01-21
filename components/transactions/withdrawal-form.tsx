import React from "react";
import Alert from "../../shared/alerts/Alert";

const WithdrawalForm = () => {
  return (
    <div>
      <div className="my-6">
        <Alert
          message={
            "Please ensure that you have updated your wallet address first, an also carefully fill the form "
          }
        />
        <div>
          <form className="flex flex-col md:flex-row justify-between gap-3  items-start md:items-center">
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
            {/* coin field */}
            <div className="flex flex-col w-full flex-1 mt-8">
              <label
                htmlFor="network"
                className="md:text-sm text-gray-500 font-sec"
              >
                Select Network / Coin
              </label>
              <div>
                <select className="rounded my-3 font-sec text-base px-2 py-3  bg-gray-200/95 w-full   focus-within:outline-none">
                  <option>Tron TRX</option>
                  <option>USDT ERC20</option>
                  <option>USDT TRc20</option>
                </select>
              </div>
            </div>
            {/* withdrawal type */}
            <div className="flex flex-1 w-full flex-col mt-8">
              <label
                htmlFor="network"
                className="md:text-sm text-gray-500 font-sec"
              >
                Select Withdrawal type
              </label>
              <div className="w-full">
                <select className="rounded my-3 font-sec text-base px-2 py-3  bg-gray-200/95 w-full   focus-within:outline-none">
                  <option>Manual</option>
                  <option>Automatic</option>
                </select>
              </div>
            </div>
          </form>

          {/* submit button */}
          <button className="text-white font-sec px-6 text-sm font-bold py-2 bg-paper rounded">
            Send Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawalForm;
