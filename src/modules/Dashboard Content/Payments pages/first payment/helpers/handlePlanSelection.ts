const increments = [1, 3, 6, 12, 24, 36];

export const getPrice = (value: number, type: "months" | "years") => {
  const monthlyRate = 9.99;
  const yearlyRate = 79.99;

  if (type === "months") {
    return `$${(monthlyRate * value).toFixed(2)}`;
  }
  return `$${(yearlyRate * value).toFixed(2)}`;
};

export const getDisplayValue = (value: number, type: "months" | "years") => {
  if (type === "years") {
    return `${value} Year${value > 1 ? "s" : ""}`;
  }
  return `${value} Month${value > 1 ? "s" : ""}`;
};

// increase
export const increaseValue = ({
  customType,
  customValue,
  setCustomType,
  setCustomValue,
}: {
  customType: "months" | "years";
  customValue: number;
  setCustomType: React.Dispatch<React.SetStateAction<"months" | "years">>;
  setCustomValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  if (customType === "months") {
    const nextIndex = increments.indexOf(customValue) + 1;
    if (nextIndex < increments.length) {
      if (increments[nextIndex] === 12) {
        setCustomType("years");
        setCustomValue(1);
      } else if (increments[nextIndex] === 24) {
        setCustomType("years");
        setCustomValue(2);
      } else if (increments[nextIndex] === 36) {
        setCustomType("years");
        setCustomValue(3);
      } else {
        setCustomValue(increments[nextIndex]);
      }
    } else {
      setCustomValue(1); // Reset to 1 month
      setCustomType("months");
    }
  } else if (customType === "years") {
    const nextIndex = increments.indexOf(customValue * 12) + 1;
    if (nextIndex < increments.length) {
      setCustomValue(increments[nextIndex] / 12);
    } else {
    }
  }
};

// decrease
export const decreaseValue = ({
  customType,
  customValue,
  setCustomType,
  setCustomValue,
}: {
  customType: "months" | "years";
  customValue: number;
  setCustomType: React.Dispatch<React.SetStateAction<"months" | "years">>;
  setCustomValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  if (customType === "months") {
    const prevIndex = increments.indexOf(customValue) - 1;
    if (prevIndex >= 0) {
      setCustomValue(increments[prevIndex]);
    } else {
      setCustomValue(1);
    }
  } else if (customType === "years") {
    const currentValueInMonths = customValue * 12;
    if (currentValueInMonths === 12) {
      setCustomType("months");
    }
    const prevIndex = increments.indexOf(currentValueInMonths) - 1;
    if (prevIndex >= 0) {
      if (currentValueInMonths <= 12) {
        setCustomType("months");
        setCustomValue(increments[prevIndex]);
      } else {
        const newValueInMonths = increments[prevIndex];
        setCustomValue(newValueInMonths / 12);
      }
    } else {
      setCustomValue(1);
      setCustomType("months");
    }
  }
};
