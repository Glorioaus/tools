import { createProxyMiddleware } from 'http-proxy-middleware'

let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  console.error('Error importing user config', e)
}

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
  env: {
    NEXT_PUBLIC_BASE_API: process.env.API_URL
  },
  trailingSlash: false
}

function mergeConfig (nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key]
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}

mergeConfig(nextConfig, userConfig)

export default nextConfig

export const config = {
  async serverMiddleware () {
    if (process.env.NODE_ENV === 'development') {
      return [
        createProxyMiddleware('', {
          target: process.env.API_URL,
          changeOrigin: true,
          pathRewrite: { '^': '' }
        })
      ]
    }
    return []
  }
}
