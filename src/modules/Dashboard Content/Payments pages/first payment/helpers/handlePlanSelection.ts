export const handlePackageSelect = ({
  packageDuration,
  setMonth,
  setPrice,
}: {
  packageDuration: number;
  setMonth: any;
  setPrice: any;
}) => {
  if (packageDuration >= 0) {
    setMonth(packageDuration);
    setPrice(packageDuration * 12);
  }
};
export const handleIncrease = ({
  month,
  setMonth,
  setPrice,
  price,
}: {
  month: number;
  setMonth: any;
  setPrice: any;
  price: number;
}) => {
  if (month < 12 && price < 144) {
    setMonth((prev: number) => prev + 1);
    setPrice((prev: number) => prev + 12);
  }
};

export const handleDecrease = ({
  month,
  setMonth,
  setPrice,
  price,
}: {
  month: number;
  setMonth: any;
  setPrice: any;
  price: number;
}) => {
  if (price > 12 && month > 1) {
    setMonth((prev: number) => prev - 1);
    setPrice((prev: number) => prev - 12);
  }
};

export const handleProceed = ({
  month,
  price,
}: {
  month: number;
  price: number;
}) => {
  console.log("month is", month, "and price is", price);
};

export const packages = [
  { name: "1 Month", price: 12, duration: 1 },
  { name: "6 Months", price: 72, duration: 6 },
  { name: "12 Months", price: 144, duration: 12 },
];
