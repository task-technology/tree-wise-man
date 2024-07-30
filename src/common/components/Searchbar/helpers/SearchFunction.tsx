export const clearSearch = (setQuery: any) => {
  setQuery("");
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.delete("searchTerm");
  const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
  if (urlParams?.toString() != "") {
    window.history.pushState({}, "", newUrl);
  } else {
    window.history.pushState({}, "", "");
  }
};

export const handleSearch = (
  e: React.FormEvent<HTMLFormElement>,
  query: string
) => {
  e.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  if (query) {
    urlParams.set("searchTerm", query);
  } else {
    urlParams.delete("searchTerm");
  }
  const newUrl = `${window.location.pathname}?${urlParams.toString()}`;
  if (query) {
    window.history.pushState({}, "", newUrl);
  }
};

export const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setQuery: any
) => {
  setQuery(e.target.value);
};
