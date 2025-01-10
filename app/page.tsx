'use client'
import { Sidebar } from './components/sidebar'
import { ToolsGrid } from './components/tools-grid'
import { useState, useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import dynamic from 'next/dynamic'
import { LinkItem } from './components/sidebar'

// 动态导入 CPK 组件
const CPK = dynamic(() => import('./components/tools/CPK'), { ssr: false })

export default function Page() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [selectedLink, setSelectedLink] = useState<LinkItem>({
    title: '全部',
    icon: <></>, // 初始时不需要图标
    href: '/',
    tag: 'all'
  })

  const handleLinkClick = (link: LinkItem) => {
    setSelectedLink(link)
  }

  const links: LinkItem[] = [
    { title: '全部', icon: <></>, href: '/', tag: 'all' },
    { title: 'CPK', icon: <></>, href: '/CPK', tag: 'cpk' },
    // 添加其他链接项
  ]

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const link = links.find(l => l.href === url)
      if (link) {
        setSelectedLink(link)
      }
    }
  }, [pathname])

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar onLinkClick={handleLinkClick} />
      <main className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">
          舜宇工具集
        </h1>
        {pathname === '/' ? (
          <ToolsGrid selectedLink={selectedLink} onLinkClick={handleLinkClick} />
        ) : (
          <div>
            {pathname === '/CPK' && <CPK />}
            {/* 添加其他工具组件 */}
          </div>
        )}
      </main>
    </div>
  )
}