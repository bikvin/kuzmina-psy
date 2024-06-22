/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: process.env.NEXT_PUBLIC_AWS_S3_BUCKET_LINK.slice(
          8,
          process.env.NEXT_PUBLIC_AWS_S3_BUCKET_LINK.length
        ),
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
