import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  distDir: 'build',
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // 可以在开发时,实时刷新,在编译时,编译出相对路径的静态文件
  ...(process.env.NODE_ENV === 'development' ? {} : { 
    output: 'export' ,
    basePath: '',
    assetPrefix: './',
  }),

}

export default nextConfig;
