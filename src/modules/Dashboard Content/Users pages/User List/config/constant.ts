export const tableHeader = [
  "ID",
  "Name",
  "Designation",
  "Email",
  "Contact Number",
  "Company",
  "Role",
  "Subscription Start Date",
  "Subscription End Date",
  "Delete",
  "Edit",
];
export const tableLayout = [
  "item?.id",
  "item?.name",
  "item?.designation",
  "item?.email",
  "item?.contactNo",
  "item?.company",
  "item?.role",
  "item?.subscription?.startDate?.slice(0,10)",
  "item?.subscription?.endDate?.slice(0,10)",
];

export const btnValues = [
  { label: "Active", value: "Active" },
  { label: "Deactivated", value: "Deactivated" },
];

export const keys = ["searchTerm"];
