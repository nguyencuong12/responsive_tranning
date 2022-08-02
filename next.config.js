/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // basePath: "/docs",
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["swiperjs.com", "localhost","api.sashimeomeo.com"],
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  env: {
    API_URL: "http://localhost:5000",
    // API_URL: "http://api.sashimeomeo.com",



  },
};

module.exports = nextConfig;
