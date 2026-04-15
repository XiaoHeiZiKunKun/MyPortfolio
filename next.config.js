const nextConfig = {
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'node:fs', 'node:path'];
    }
    return config;
  },
};
export default nextConfig; // Usa export default invece di module.exports