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
  `item?.published.toString() === true ? "Public" : "Private"`,
];

export const btnValues = [
  { label: "Active", value: "Active" },
  { label: "Deactivated", value: "Deactivated" },
];

export const keys = ["searchTerm"];
