export const calculateProfit = (amount: number, roi: number) => {
  const result = amount * (roi / 100);
  const profit = amount + result;
  return profit;
};
