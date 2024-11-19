export const tableHeader = [
  "ID",
  "Owner Name",
  "Owner Number",
  "Owner Designation",
  "Created By",
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
  "item?.ownerName",
  "item?.contactNo",
  "item?.ownerDesignation",
  'item?.author?.name +" (" + item?.author?.role +")"',
  "item?.title",
  "item?.state",
  "item?.zipCode",
  "item?.urlLink",
  "item?.content?.slice(0,20)",
  `item?.published === true ? "Public" : "Private"`,
];

export const btnValues = [
  { label: "public", value: "public" },
  { label: "private", value: "private" },
  { label: "disabled", value: "Disabled" },
];

export const keys = ["searchTerm", "state"];
