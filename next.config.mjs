/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Leaf-Sense',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
