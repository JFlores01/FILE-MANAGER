/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "quiet-puffin-821.convex.cloud",
      },
    ],
  },
};

export default nextConfig;
