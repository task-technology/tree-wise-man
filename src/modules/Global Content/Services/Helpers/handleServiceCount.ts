export const handleSubmit = async ({
  serviceClick,
  token,
  url,
  id,
  tel,
}: {
  serviceClick?: any;
  token?: string;
  url?: string;
  id?: string;
  tel?: boolean;
}) => {
  const result = await serviceClick({ token, id });
  console.log("click", result);

  if (result?.data?.success) {
    if (url) {
      if (tel) {
        window.open(url, "_blank");
      } else if (url.startsWith("http://") || url.startsWith("https://")) {
        window.open(url, "_blank");
      } else {
        // If the URL doesn't start with "http" or "https", you can add one, for example:
        window.open(`https://${url}`, "_blank");
      }
    }
  }
};
