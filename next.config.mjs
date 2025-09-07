/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // keeps your trailing slashes

  async rewrites() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'brandx.temitoperuthjacob.com', // match subdomain
          },
        ],
        destination: '/branding/:path*', // route all subdomain requests to /branding
      },
    ]
  },
}

export default nextConfig
