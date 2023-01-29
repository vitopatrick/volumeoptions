export const formatTime = (date: number) => {
  return new Intl.DateTimeFormat("en-US").format(date);
};

export const relativeTime = (date: Date | any) => {
  return new Intl.RelativeTimeFormat("en", { style: "narrow" }).format(
    date,
    "days"
  );
};