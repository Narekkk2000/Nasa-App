export const truncateNumber = (number, digits) => {
  const num = typeof number === "string" ? parseFloat(number) : number;

  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("Invalid number provided");
  }

  return parseFloat(num.toFixed(digits));
};
