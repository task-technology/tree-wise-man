export const tableHeader = [
  "ID",
  "Company Name",
  "State",
  "Zip Code",
  "Website",
  "Details",
  "status",
  "Delete",
  "Edit",
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

export const btnValues = [
  { label: "public", value: "public" },
  { label: "private", value: "private" },
  { label: "disabled", value: "Disabled" },
];

export const keys = ["searchTerm"];
