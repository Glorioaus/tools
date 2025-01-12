'use client'
import './globals.css'
import { Sidebar } from './components/sidebar'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { LinkItem } from './components/sidebar'



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathname = usePathname()
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
    const link = links.find(l => l.href === pathname)
    if (link) {
      setSelectedLink(link)
    }
  }, [pathname])

  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50">
        <Sidebar onLinkClick={handleLinkClick} />
        <main className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            舜宇工具集
          </h1>
          {children}
        </main>
      </body>
    </html>
  )
}