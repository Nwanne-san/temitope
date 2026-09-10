/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // keeps your trailing slashes
  async redirects() {
    return [
      {
        source: '/waitlist',
        destination: '/books#waitlist',
        permanent: false,
      },
      {
        source: '/book',
        destination: '/books',
        permanent: true,
      },
      {
        source: '/evolve',
        destination: '/books',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
