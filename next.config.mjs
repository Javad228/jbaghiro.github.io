/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    basePath: '',
    trailingSlash: true,
};

export default nextConfig;
