export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setQuery: any
) => {
  setQuery(e.target.value);
};
