import type { NextConfig } from "next";

const config: NextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: true,
  },
  logging: {
    fetches: { fullUrl: true },
  },
  outputFileTracingRoot: "../../",
};

export default config;