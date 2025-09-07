/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // keeps your trailing slashes

  async rewrites() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'brandx.temitoperuthjacob.com', // match subdomain
          },
        ],
        destination: '/branding', // route only subdomain root to /branding
      },
    ]
  },
}

export default nextConfig
