/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "support.apple.com",
      "lh3.googleusercontent.com",
    ],
  },
};

module.exports = nextConfig;
