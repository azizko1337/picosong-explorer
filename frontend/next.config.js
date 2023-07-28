/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    BACKEND: "http://localhost:5000",
  },
};

module.exports = nextConfig;
