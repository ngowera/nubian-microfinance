import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_ACTIONS === "true";
const basePath = githubPages ? "/nubian-microfinance" : "";
const nextConfig: NextConfig = {
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  ...(githubPages ? { output: "export" as const, trailingSlash: true, basePath, assetPrefix: basePath } : {}),
};
export default nextConfig;
