import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: "export",
  basePath: isProd ? "/DigitalForensicsDemo" : "",
  assetPrefix: isProd ? "/DigitalForensicsDemo/" : "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
