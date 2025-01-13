import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

// 高阶组件，用于检查登录权限
const withAuth = WrappedComponent => {
  return props => {
    const router = useRouter()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      // 检查用户是否登录
      const checkAuth = async () => {
        // 尝试从 URL 中获取 ticket 参数
        const ticket = new URLSearchParams(window.location.search).get('ticket')
        // 从 localStorage 获取 'authMap'
        let authMap = JSON.parse(localStorage.getItem('authMap')) || {}
        // 从 'authMap' 中获取存储的 ticket
        const storedTicket = authMap.ticket

        // 如果 localStorage 中有 'ticket'...
        if (storedTicket) {
          // ...那么我们就假设用户已经登录
          console.log('存储的 ticket 是有效的:', storedTicket)
        }
        // 否则，如果 URL 中有新的 'ticket'...
        else if (ticket) {
          // ...没有存储的 'ticket'，但是我们在 URL 中找到了新的 'ticket'
          authMap.ticket = ticket
          // 在 localStorage 中存储新的 'authMap'
          localStorage.setItem('authMap', JSON.stringify(authMap))
          console.log('已用新的 ticket 更新 authMap:', authMap)
        }
        // 否则，如果没有找到任何 'ticket'...
        else {
          // ...没有存储的 'ticket' 也没有在 URL 中找到新的 'ticket'
          // 移除无效的存储的 'authMap'
          localStorage.removeItem('authMap')
          // 并重定向到登录页面
          console.log('由于缺少 ticket，正在重定向到登录页面')
          router.push(
            `https://sso.sunnyoptical.cn/login?service=${encodeURIComponent(
              window.location.origin
            )}`
          )
        }

        // 设置加载状态为 false，这将触发组件的重新渲染
        setLoading(false)
      }

      checkAuth()
    }, [])

    // 如果用户未登录，返回 null，否则渲染传入的组件
    if (loading) return null

    return <WrappedComponent {...props} />
  }
}

export default withAuth
