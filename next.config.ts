import { i18n } from './next-i18next.config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  images: {
    domains: ['images.ctfassets.net'],
  },
};

export default nextConfig;
