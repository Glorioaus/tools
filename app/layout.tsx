'use client'
import './globals.css'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Sidebar, LinkItem } from './components/sidebar'
import { observer } from 'mobx-react-lite'
import toolStore from './store'

const RootLayout = observer(({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname()

  useEffect(() => {
    const link = links.find(l => l.href === pathname)
    if (link) {
      toolStore.setSelectedToolTitle(link.title)
      toolStore.setSelectedToolTag(link.tag || 'all') // 设置 selectedToolTag
    }
  }, [pathname])

  const links: LinkItem[] = [
    { title: '全部', icon: <></>, href: '/', tag: 'all' },
    // 添加其他链接项
  ]

  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        <Sidebar onLinkClick={(link: LinkItem) => {
          toolStore.setSelectedToolTitle(link.title)
          toolStore.setSelectedToolTag(link.tag || 'all') // 设置 selectedToolTag
        }} />
        <main className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            {toolStore.selectedToolTitle}
          </h1>
          {children}
        </main>
      </body>
    </html>
  )
})

export default RootLayout