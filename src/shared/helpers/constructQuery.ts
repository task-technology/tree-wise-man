export function constructQuery({
  searchParams,
  fields,
  keys,
  page,
  limit,
}: {
  searchParams: any;
  fields?: any;
  keys?: any;
  page: any;
  limit: any;
}) {
  const queryParams = [];
  keys?.length > 0 &&
    keys?.forEach((key: string) => {
      const value = searchParams?.get(key);
      if (value && value !== "all") {
        queryParams.push(`${key}=${value}`);
      }
    });
  if (fields?.length > 0) {
    queryParams.push(`fields=${fields}`);
  }
  if (page) {
    queryParams.push(`page=${page}`);
  }
  if (limit) {
    queryParams.push(`limit=${limit}`);
  }

  const query = queryParams.join("&");

  return query;
}
