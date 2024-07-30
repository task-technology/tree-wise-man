export const handleCheckboxChange = (
  index: string,
  checkedRows: string[],
  setCheckedRows: any
) => {
  if (checkedRows && checkedRows?.includes(index)) {
    setCheckedRows(checkedRows.filter((item) => item !== index));
  } else {
    setCheckedRows([...checkedRows, index]);
  }
};
export const handleAllCheckboxChange = (
  checkedRows: string[],
  setCheckedRows: any,
  items: any
) => {
  if (checkedRows.length === items?.length) {
    setCheckedRows([]);
  } else {
    const allIds =
      items
        ?.map((item: any) => item?.id || item?._id)
        .filter((id: string) => id !== undefined) || [];

    if (allIds.length > 0) {
      setCheckedRows(allIds as string[]);
    }
  }
};
