/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // basePath: "/docs",
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["swiperjs.com", "localhost"],
  },
  experimental: {
    concurrentFeatures: true,
    serverComponents: true,
  },
  env: {
    // API_URL: "https://api.sashimeomeo.com",
    API_URL: "http://localhost:5000",
  },
};

module.exports = nextConfig;
