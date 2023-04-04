/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains:[
      "links.papareact.com",
      "aiimagegenerate545aa4.blob.core.windows.net",
  ],
  },
};

module.exports = nextConfig
