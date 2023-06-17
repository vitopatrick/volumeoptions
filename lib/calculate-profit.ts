// calculate Profit
export function profitCalculation(amount: number) {
  let profit: number;
  // if else statement
  if (amount >= 300 && amount <= 500) {
    return (profit = amount + amount * 0.15);
  } else if (amount >= 500 && amount <= 1000) {
    return (profit = amount + amount * 0.2);
  } else if (amount >= 1000 && amount <= 5000) {
    return (profit = amount + amount * 0.25);
  } else if (amount >= 5000 && amount <= 10000) {
    return (profit = amount + amount * 0.26);
  } else if (amount >= 10000 && amount <= 15000) {
    return (profit = amount + amount * 0.27);
  } else if (amount >= 15000 && amount <= 20000) {
    return (profit = amount + amount * 0.3);
  } else if (amount >= 20000 && amount <= 25000) {
    return (profit = amount + amount * 0.31);
  } else if (amount >= 25000 && amount <= 30000) {
    return (profit = amount + amount * 0.32);
  } else if (amount >= 30000 && amount <= 35000) {
    return (profit = amount + amount * 0.33);
  } else if (amount >= 35000 && amount <= 40000) {
    return (profit = amount + amount * 0.35);
  } else if (amount >= 40000 && amount <= 45000) {
    return (profit = amount + amount * 0.36);
  } else if (amount >= 45000 && amount <= 50000) {
    return (profit = amount + amount * 0.4);
  } else if (amount >= 100000 && amount <= 200000) {
    return (profit = amount + amount * 0.425);
  } else if (amount >= 200000 && amount <= 300000) {
    return (profit = amount + amount * 0.429);
  } else if (amount >= 400000) {
    return (profit = amount + amount * 0.5);
  }
}
