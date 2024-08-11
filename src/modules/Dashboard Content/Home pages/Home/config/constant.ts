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
  `item?.published === true ? "Public" : "Private"`,
];
