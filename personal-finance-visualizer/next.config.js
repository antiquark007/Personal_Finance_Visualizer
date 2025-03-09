module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['example.com'], // Add your image domains here
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI, // MongoDB connection string
  },
};