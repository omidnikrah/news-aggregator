export const parseDate = (date?: string) => {
  if (!date) return undefined;

  const [year, month, day] = date.split("-").map(Number);
  return { year, month, day };
};
