let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
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
    BACKEND_URL:
      process.env.NODE_ENV === 'development'
        ? 'http://10.199.0.221:5000'
        : 'http://10.199.0.2232:5000'
  },
  trailingSlash: true // 添加 trailingSlash 配置
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
