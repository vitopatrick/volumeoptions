import { useFetchAllCoins } from "../../hooks/useFetchAllCoins";
import { useFetchUser } from "../../hooks/useFetchUser";
import { convertCurrency } from "../../utils/formatCurrency";

const WalletCoins = () => {
  const { userState: user, loading }: any = useFetchUser();
  const { coins: main } = useFetchAllCoins(30);

  const coins = [
    {
      id: 1,
      coin: "Tron",
      img: "/tron.png",
      quantity: user?.tron ? user?.tron : 0,
      sym: "trx",
      amount: convertCurrency(main, user?.tron ? user?.usdt : 0, "trx"),
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
      <h4 className="text-xl font-semibold">Portfolio</h4>
      <div className="grid grid-cols-3 gap-3 mt-4 px-2 py-3 rounded-t bg-bg font-bold">
        <div>Coin</div>
        <div>Quantity</div>
        <div>Amount($)</div>
      </div>
      {coins.map((coin) => (
        <div className="grid grid-cols-3 gap-3 px-2 py-3 bg-bg/40">
          <div className="flex items-center md:gap-3">
            <div className="w-[18%] md:w-[10%] mr-2">
              <img src={coin.img} alt={coin.coin} />
            </div>
            <div>{coin.coin}</div>
          </div>
          <div className="flex items-center gap-2">
            <div>{coin.quantity ? coin.quantity : 0}</div>
            <div className="uppercase font-bold">{coin.sym}</div>
          </div>
          <div>{coin.amount}</div>
        </div>
      ))}
    </section>
  );
};

export default WalletCoins;
