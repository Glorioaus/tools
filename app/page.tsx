'use client'

import { ToolsGrid } from './components/tools-grid'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'
import { LinkItem } from './components/sidebar'

// 动态导入 CPK 组件
const CPK = dynamic(() => import('./components/tools/CPK'), { ssr: false })

export default function Page() {
  const pathname = usePathname()
  const [selectedLink, setSelectedLink] = useState<LinkItem | null>(null)

  const handleLinkClick = (link: LinkItem) => {
    setSelectedLink(link)
  }

  return (
    <div>
      {pathname === '/' ? (
        <ToolsGrid selectedLink={selectedLink} onLinkClick={handleLinkClick} />
      ) : (
        <div>
          {pathname === '/CPK' && <CPK />}
          {/* 添加其他工具组件 */}
        </div>
      )}
    </div>
  )
}