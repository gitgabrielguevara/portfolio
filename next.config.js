/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    // no https: //
    domains: ['placekitten.com']
  }
}

module.exports = nextConfig
