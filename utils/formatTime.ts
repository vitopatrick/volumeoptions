export const formatTime = (date: number) => {
  return new Intl.DateTimeFormat("en-US").format(date);
};
