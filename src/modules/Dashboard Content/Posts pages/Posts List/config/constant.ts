export const tableHeader = [
  "ID",
  "Company Name",
  "State",
  "Zip Code",
  "Website",
  "Details",
  "status",
];
export const tableLayout = [
  "item?.id",
  "item?.title",
  "item?.state",
  "item?.zipCode",
  "item?.urlLink",
  "item?.content",
  `item?.published.toString() === true ? "Public" : "Private"`,
];

export const data = [
  {
    id: "332",
    part_no: "2334423",
    description: "Hello world",
    quantity: 232,
  },
];

export const btnValues = [
  { label: "Active", value: "Active" },
  { label: "Deactivated", value: "Deactivated" },
];
