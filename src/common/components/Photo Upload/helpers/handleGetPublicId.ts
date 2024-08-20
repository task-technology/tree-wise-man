export const getPublicIdFromUrl = (url: string): string | null => {
  const regex = /\/upload\/(?:v\d+\/)?([^/.]+)\.[a-z]+$/;
  const match = url.match(regex);
  return match ? match[1] : null;
};

// Example usage:
const imageUrl =
  "https://res.cloudinary.com/dyeljlqjm/image/upload/v1723103650/ywwgmksi3nt5o0qqduc1.png";
const publicId = getPublicIdFromUrl(imageUrl);
