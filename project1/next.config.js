/** @type {import('next').NextConfig} */

const nextConfig = {

  async redirects() {
    return [
      {
        source: "/hi",
        destination: '/',
        permanent: true,
      },
      {
        source: "/bye",
        destination: '/',
        permanent: true,
      },
    ]
  },
  reactStrictMode: true,

}

module.exports = nextConfig
