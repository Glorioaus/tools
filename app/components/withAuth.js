import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// 高阶组件，用于检查登录权限
const withAuth = WrappedComponent => {
  return props => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      // 假设我们有一个函数 checkAuth 来检查用户是否登录
      const checkAuth = async () => {
        const ticket = new URLSearchParams(window.location.search).get('ticket')
        if (ticket) {
          setLoading(false) // 如果 ticket 存在，不做处理，直接设置 loading 为 false
          return
        }

        const isAuthenticated = !!localStorage.getItem('authToken')
        if (!isAuthenticated) {
          router.push(
            `https://sso.sunnyoptical.cn/login?service=${encodeURIComponent(
              window.location.origin
            )}`
          )
        } else {
          setLoading(false) // 用户已登录，设置 loading 为 false
        }
      }

      checkAuth()
    }, [router])

    // 如果用户已登录，渲染传入的组件
    if (loading) return null

    return <WrappedComponent {...props} />
  }
}

export default withAuth
