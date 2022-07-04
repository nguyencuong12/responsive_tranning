/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // basePath: "/docs",
  env: {
    // API_URL: "https://api.sashimeomeo.com",
    API_URL: "http://localhost:5000",
  },
};

module.exports = nextConfig;
