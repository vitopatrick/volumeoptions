export const formatCurrency = (price: number = 0) => {
  if (typeof price === "string") {
    parseInt(price);
  }
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
    notation: "standard",
    maximumFractionDigits: 0,
  }).format(price);
};

export const convertCurrency = (
  coins: any[],
  amount: number = 0,
  coinName: string
) => {
  const name = coins.find((coin) => coin.symbol === coinName);
  const coinPrice = name?.currentPrice;
  const result = amount * coinPrice;
  return formatCurrency(result);
};

// function to convert coins
export const convertCoin = (
  coins: any[],
  amount: number | any,
  conTo: string | undefined | null,
  conFrom: string | undefined | null
) => {
  // convert coin to dollars first
  const prevCoin = coins.find((coin) => coin.symbol === conFrom);
  const prevCoinPrice = +prevCoin?.currentPrice;

  const amtDollar = amount * prevCoinPrice;

  // convert to new Coin
  const newCoin = coins.find((coin) => coin.symbol === conTo);
  const newCoinPrice = newCoin?.currentPrice;
  const result = amtDollar / newCoinPrice;

  return result.toFixed(5);
};
