/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "images.unsplash.com",
      "https://images.unsplash.com",
      "leafty.codelayers.net",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;
