import React, { useContext, useEffect, useState } from "react";
import * as Md from "react-icons/md";
import * as Fa from "react-icons/fa";
import { addresses } from "../../lib/wallet-address";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";

// Parent form component
const DepositForm = () => {
  return (
    <section className="py-3 px-2 flex-1 w-full">
      <div>
        <h3 className="font-medium text-2xl  underline">Deposit Crypto</h3>
      </div>
      {/* Form */}
      <Form />
      {/* deposit details section */}
      <Details />
    </section>
  );
};

// form component
const Form = () => {
  const [coinId, setCoinId] = useState(2);
  const [amount, setAmount] = useState(0);
  const [showCoinModal, setCoinModal] = useState(false);
  const [defaultCoin, setDefaultCoin] = useState<null | any>(null);
  const [showBarCode, setBarCode] = useState(false);

  useEffect(() => {
    const selectedCoin = addresses.find((address) => address.id === coinId);

    setDefaultCoin(selectedCoin);
  }, [coinId, defaultCoin]);

  const router = useRouter();

  // user context
  const { user: state }: any = useContext(UserContext);

  // function to submit to firebase
  async function DepositMoney(e: any) {
    e.preventDefault();
    if (!amount) {
      return toast.error("Please Enter an amount", {
        theme: "colored",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
    try {
      // get the collection Ref
      const depositRef = collection(
        store,
        "/users",
        `/${state.email}`,
        "/deposits"
      );

      await addDoc(depositRef, {
        amount: amount,
        date: serverTimestamp(),
        coin: defaultCoin.sym,
        network: defaultCoin.network,
        address: defaultCoin.address,
        hash: "",
        remarks: "",
        approved: false,
      });

      // navigate to the deposit
      router.reload();
    } catch (e: any) {
      toast(e.code, {
        type: "error",
        position: "bottom-center",
        bodyClassName: "toast",
      });
    }
  }

  return (
    <>
      <section>
        <div className="my-3 space-y-8">
          {/* coin */}
          <div>
            <p className="font-semibold text-neutral-400">Coin</p>
            <div
              onClick={() => setCoinModal(true)}
              className="flex justify-between items-center my-2 cursor-pointer bg-neutral-500  rounded"
            >
              <div className="flex items-center w-full">
                <div className="w-[6%] py-3 px-2">
                  <img
                    src={defaultCoin?.logo}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <h1 className="mx-2 font-bold">{defaultCoin?.name}</h1>
              </div>
              <div className="flex-1">
                <Md.MdArrowDropDown />
              </div>
            </div>
          </div>

          {/* end of coin */}
          {/* network */}
          <div>
            <p className="font-semibold text-neutral-400">Network</p>
            <div className="flex justify-between items-center my-2 cursor-pointer bg-neutral-500 py-3 px-2 rounded">
              <div className="flex items-center">
                <h1 className="mx-2 font-bold">{defaultCoin?.network}</h1>
              </div>
            </div>
          </div>
          {/* end of network */}
          {/* wallet details */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-neutral-400 mb-1">Address</h3>
              <p className="font-bold">{defaultCoin?.address}</p>
            </div>
            <h4
              className="font-bold capitalize cursor-pointer"
              onClick={() => setBarCode(true)}
            >
              bar code
            </h4>
          </div>
          {/* amount input field */}
          <div className="flex bg-neutral-500 items-center py-3 px-2 rounded">
            <Fa.FaDollarSign />
            <input
              type="number"
              name="amount"
              value={amount}
              onChange={(e: any) => setAmount(e.target.value)}
              className="outline-none w-full px-2 bg-transparent"
            />
          </div>
          <button
            onClick={DepositMoney}
            className="bg-teal-600 shadow rounded px-4 py-2"
          >
            Deposit
          </button>
          {/* end of wallet details */}
        </div>
      </section>
      <CoinModal show={showCoinModal} close={setCoinModal} coin={setCoinId} />

      <BarCodeModal show={showBarCode} close={setBarCode} coin={defaultCoin} />
    </>
  );
};

// network Details
const Details = () => {
  return (
    <div className="my-8 space-y-6">
      <div>
        <h4 className="font-semibold text-neutral-400 my-1">
          Recipient Account
        </h4>
        <h4 className="font-semibold">Main Account</h4>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="my-1 font-semibold text-neutral-400">
            Deposit Confirmation
          </h4>
          <h4 className="font-semibold">3 Block(s)</h4>
        </div>
        <div>
          <h4 className="my-1 font-semibold text-neutral-400">
            Withdrawal Confirmation
          </h4>
          <h4 className="font-semibold">3 Blocks(s)</h4>
        </div>
      </div>
    </div>
  );
};

// select coin Modal
const CoinModal = ({ show, close, coin }: any) => {
  function selectCoin(id: number) {
    coin(id);
    close(false);
  }

  return (
    <AnimatePresence>
      <motion.section
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeIn",
        }}
        key={show}
        className={
          show
            ? "fixed top-0 left-0 bottom-0 right-0 h-full bg-bg/20 backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="mx-auto md:w-[50%] w-[90%] bg-bg p-4">
          <div className="flex items-center justify-between my-4">
            <h4 className="font-bold underline text-2xl">Coin</h4>
            <Md.MdClose onClick={() => close(false)} />
          </div>
          <div>
            <p className="text-neutral-400 font-bold">
              Select your Preferred coin
            </p>
            <div className="grid h-[500px] overflow-y-scroll">
              {addresses.map((address) => (
                <div
                  key={address.id}
                  onClick={() => selectCoin(address.id)}
                  className="hover:bg-card ease-in transition-all cursor-pointer rounded py-4 px-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-[5%]">
                      <img src={address.logo} alt="" className="rounded-full" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="capitalize font-semibold">
                        {address.name}
                      </h4>
                      <p className="uppercase font-semibold text-neutral-400">
                        {address.network}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

// bar code
const BarCodeModal = ({ coin, show, close }: any) => {
  return (
    <AnimatePresence>
      <motion.section
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0,
        }}
        transition={{
          duration: 0.2,
          ease: "easeIn",
        }}
        key={show}
        className={
          show
            ? "absolute top-0 left-0 bottom-0 right-0 bg-bg/20 backdrop-blur-sm"
            : "hidden"
        }
      >
        <div className="w-[50%] mx-auto p-4 relative">
          <div className=" p-4 my-5">
            <Md.MdClose onClick={() => close(false)} size={30} />
          </div>
          <img src={coin?.img} />
        </div>
      </motion.section>
    </AnimatePresence>
  );
};

export default DepositForm;
