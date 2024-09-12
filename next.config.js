/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "https://images.unsplash.com",
      "leafty.codelayers.net",
      "encrypted-tbn0.gstatic.com",
      "https://maps.googleapis.com",
    ],
  },
};

module.exports = nextConfig;
