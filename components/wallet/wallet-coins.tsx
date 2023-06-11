import { useFetchAllCoins } from "../../hooks/useFetchAllCoins";
import { useFetchUser } from "../../hooks/useFetchUser";
import Loading from "../../shared/loading/Loading";
import { convertCoin, convertCurrency } from "../../utils/formatCurrency";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { doc, updateDoc } from "firebase/firestore";
import { store } from "../../firebase";
import { UserContext } from "../../context/UserContext";
import { CiBitcoin } from "react-icons/ci";
import { useRouter } from "next/router";

const WalletCoins = () => {
  const { userState: user, loading }: any = useFetchUser();
  const { coins: main } = useFetchAllCoins(30);

  const coins = [
    {
      id: 1,
      coin: "tron",
      img: "/tron.png",
      quantity: user?.tron ? user?.tron : 0,
      sym: "trx",
      amount: convertCurrency(main, user?.tron ? user?.tron : 0, "trx"),
    },
    {
      id: 2,
      coin: "USDT",
      img: "/usdt.png",
      quantity: user?.usdt ? user?.usdt : 0,
      sym: "usdt",
      amount: convertCurrency(main, user?.usdt ? user?.usdt : 0, "usdt"),
    },
    {
      id: 3,
      coin: "Bitcoin",
      img: "/btc.png",
      sym: "btc",
      quantity: user?.btc ? user?.btc : 0,
      amount: convertCurrency(main, user?.btc ? user?.btc : 0, "btc"),
    },
    {
      id: 4,
      coin: "Ethereum",
      img: "/eth.png",
      quantity: user?.eth ? user?.eth : 0,
      sym: "eth",
      amount: convertCurrency(main, user?.eth ? user?.eth : 0, "eth"),
    },
  ];

  return (
    <section className="font-main text-white mx-2 my-8">
      <h4 className="text-xl font-semibold">Assets</h4>
      <div className="grid grid-cols-3 gap-3 mt-4 px-2 py-3 rounded-t bg-bg font-bold">
        <div>Coin</div>
        <div>Quantity</div>
        <div>Amount($)</div>
      </div>
      {loading && <Loading />}
      {!loading &&
        coins.map((coin) => (
          <div className="grid grid-cols-3 gap-3 px-2 py-3 bg-bg/40">
            <div className="flex items-center md:gap-3">
              <div className="w-[18%] md:w-[10%] mr-2">
                <img src={coin.img} alt={coin.coin} className="rounded-full" />
              </div>
              <div>{coin.coin}</div>
            </div>
            <div className="flex items-center gap-2">
              <div>{coin?.quantity ? coin?.quantity : 0}</div>
              <div className="uppercase font-bold">{coin.sym}</div>
            </div>
            <div>{coin.amount}</div>
          </div>
        ))}
      <ConvertCoin convert={coins} main={main} user={user} />
    </section>
  );
};

const ConvertCoin = ({ convert, main, user: state }: any) => {
  const [to, setTo] = useState<string>("btc");
  const [from, setFrom] = useState<string>("trx");
  const [amount, setAmount] = useState<number | string | any>();

  const { user }: any = useContext(UserContext);
  const router = useRouter();

  const convertCurrency = async (e: any) => {
    e.preventDefault();

    if (!amount) {
      return toast("Enter Amount of coin", {
        position: "bottom-center",
        bodyClassName: "toast",
        type: "error",
      });
    }

    if (!to || !from) {
      return toast("Please Select coin", {
        position: "bottom-center",
        bodyClassName: "toast",
        type: "error",
      });
    }

    const converted = convertCoin(main, amount, to, from);
    const convertTo = to === "trx" ? "tron" : to;
    const convertFrom = from === "trx" ? "tron" : from;

    const convertFromValue: any = Object.entries(state).find(
      (value) => value[0] === convertFrom
    );

    const convertToValue: any = Object.entries(state).find(
      (value) => value[0] === convertTo
    );

    try {
      if (convertFromValue[1] < amount) {
        return toast("You do not have enough coin in your wallet", {
          type: "error",
          position: "bottom-center",
          bodyClassName: "toast",
        });
      }

      const userRef = doc(store, "users", `${user.email}`);

      toast(
        `Conversion of ${amount}${convertFromValue[0]} to ${convertToValue[0]} was successful`,
        {
          bodyClassName: "toast",
          position: "bottom-center",
          type: "success",
        }
      );
      await updateDoc(userRef, {
        [convertToValue[0]]: convertToValue[1] + parseInt(converted),
        [convertFromValue[0]]: convertFromValue[1] - parseInt(amount),
      });
    } catch (error: any) {
      toast(error.code, {
        position: "bottom-center",
        type: "error",
        bodyClassName: "toast",
      });
    }
  };

  return (
    <section className="my-6">
      <div className="font-semibold text-xl underline">Convert</div>
      <label htmlFor="warning" className="text-red-300 my-2 text-sm capitalize">
        Please enter the quantity of coins
      </label>
      <div className="flex flex-col md:flex-row gap-2 md:items-center justify-between my-2">
        <div className="flex-1">
          <label htmlFor="quantity">Quantity</label>
          <div className="bg-bg rounded py-2 px-1 mt-2 flex flex-row-reverse items-center gap-2">
            <input
              type="text"
              className="bg-transparent outline-none w-full"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <CiBitcoin />
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="convert from">From</label>
          <div className="w-full bg-bg rounded mt-1 py-2 px-1">
            <select
              name="coin_from"
              className="w-full bg-transparent outline-none"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            >
              {convert.map((con: any) => (
                <option value={con.sym}>{con.coin}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex-1">
          <label htmlFor="convert from">To</label>
          <div className="w-full bg-bg rounded mt-1 py-2 px-1">
            <select
              name="coin_from"
              className="w-full bg-transparent outline-none"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            >
              {convert.map((con: any) => (
                <option value={con.sym}>{con.coin}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <button
        className="w-fit px-3 py-2 bg-teal-600 rounded font-semibold"
        onClick={convertCurrency}
      >
        Convert
      </button>
    </section>
  );
};

export default WalletCoins;
