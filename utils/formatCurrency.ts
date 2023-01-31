export const formatCurrency = (price: number) => {
  if (typeof price === "string") {
    parseInt(price);
  }
  return new Intl.NumberFormat("en-Us", {
    currency: "USD",
    style: "currency",
    maximumSignificantDigits: 3,
  }).format(price);
};

export const convertCurrency = (
  coins: any[],
  amount: number,
  coinName: string
) => {
  const name = coins.find((coin) => coin.symbol === coinName);
  const coinPrice = name?.currentPrice;
  return formatCurrency(amount * coinPrice);
};