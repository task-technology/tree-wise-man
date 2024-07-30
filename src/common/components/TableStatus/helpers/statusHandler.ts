export const setQuery = (
  paramName: string,
  paramValue: string,
  router: any,
  pathname: any
) => {
  const queryParams = new URLSearchParams(window.location.search);

  if (paramValue === "") {
    queryParams.delete(paramName);
    queryParams.delete("searchTerm");
  } else {
    queryParams.set(paramName, paramValue);
  }
  router.push(`${pathname}?${queryParams.toString()}`);
};

export const handleFilter = (
  paramName: string,
  paramValue: string,
  route: any,
  setActiveRoute: any,
  pathname: any
) => {
  setQuery(paramName, paramValue, route, pathname);
  setActiveRoute(route);
};

export const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
};
