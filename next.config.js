/** @type {import('next').NextConfig} */
const nextConfig = {
  // La gestione dei moduli node: su Cloudflare oggi si fa così (se serve ancora)
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'node:fs', 'node:path'];
    }
    return config;
  },
};

module.exports = nextConfig;