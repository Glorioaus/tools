// let userConfig = undefined

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    unoptimized: true
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true
  },
  async rewrites () {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/dev/:path*', // 匹配前端发起的API请求路径
          destination: `${process.env.NEXT_PUBLIC_BACKEND_URL}/:path*` // 代理所有其他请求
        }
      ]
    }
    return []
  },
  env: {
    NEXT_PUBLIC_BASE_API: process.env.API_URL
  },
  trailingSlash: false
}

// function mergeConfig (nextConfig, userConfig) {
//   if (!userConfig) {
//     return
//   }

//   for (const key in userConfig) {
//     if (
//       typeof nextConfig[key] === 'object' &&
// !Array.isArray(nextConfig[key])
//     ) {
//       nextConfig[key] = {
//         ...nextConfig[key],
//         ...userConfig[key]
//       }
//     } else {
//       nextConfig[key] = userConfig[key]
//     }
//   }
// }

// mergeConfig(nextConfig, userConfig)

export default nextConfig
