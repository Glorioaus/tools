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
        const ticket = new URLSearchParams(window.location.search).get('ticket')
        let authMap = JSON.parse(localStorage.getItem('authMap')) || {}
        const storedTicket = authMap.ticket
        const storedTicketTimestamp = authMap.ticketTimestamp
        const currentTime = new Date().getTime()

        console.log('Checking authentication:', {
          ticket,
          storedTicket,
          storedTicketTimestamp,
          currentTime
        })

        if (
          storedTicket &&
          currentTime - parseInt(storedTicketTimestamp) <= 12 * 60 * 60 * 1000
        ) {
          console.log('Stored ticket is valid:', storedTicket)
          setLoading(false)
          return
        } else {
          if (
            !storedTicket ||
            currentTime - parseInt(storedTicketTimestamp) > 12 * 60 * 60 * 1000
          ) {
            if (ticket) {
              authMap = {
                ticket: ticket,
                ticketTimestamp: currentTime.toString()
              }
              localStorage.setItem('authMap', JSON.stringify(authMap))
              console.log('Updated authMap with new ticket:', authMap)
              setLoading(false)
              return
            } else {
              localStorage.removeItem('authMap')
              console.log(
                'Redirecting to login page due to invalid or missing ticket'
              )
              router.push(
                `https://sso.sunnyoptical.cn/login?service=${encodeURIComponent(
                  window.location.origin
                )}`
              )
              return
            }
          }
        }

        console.log('No ticket found, but stored ticket is valid')
        setLoading(false)
      }

      checkAuth()
    }, [router])

    // 如果用户未登录，返回 null，否则渲染传入的组件
    if (loading) return null

    return <WrappedComponent {...props} />
  }
}

export default withAuth
