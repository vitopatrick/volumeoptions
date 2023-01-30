export const formatCurrency = (price: number) => {
  if (typeof price === "string") {
    parseInt(price);
  }
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(price);
};


export const convertCurrency = (
  coins: any[],
  amount: number,
  coinName: string
) => {
  const name = coins.find((coin) => coin.symbol === coinName);
  return formatCurrency(name?.currentPrice * amount);
};