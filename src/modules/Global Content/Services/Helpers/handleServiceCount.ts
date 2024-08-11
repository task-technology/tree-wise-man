export const handleSubmit = async ({
  serviceClick,
  token,
  url,
  fbLink,
  twtrLink,
  instaLink,
  id,
}: {
  serviceClick?: any;
  token?: string;
  router?: any;
  url?: string;
  fbLink?: string;
  twtrLink?: string;
  instaLink?: string;
  id?: string;
}) => {
  const result = await serviceClick({ token, id });
  if (result?.data?.success) {
    if (url) {
      window.open(`${url}`, "_blank");
    } else if (instaLink) {
      window.open(`${instaLink}`, "_blank");
    } else if (twtrLink) {
      window.open(`${twtrLink}`, "_blank");
    } else if (fbLink) {
      window.open(`${fbLink}`, "_blank");
    }
  }
};
