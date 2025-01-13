'use client'

import withAuth from './components/withAuth'; // 确保导入正确的 withAuth
import { ToolsGrid } from './components/tools-grid'; // 确保命名导入
import { useState } from 'react'
import dynamic from 'next/dynamic'
import { LinkItem } from './components/sidebar'
import toolStore from './store' // 导入 store
import { useRouter } from 'next/navigation' // 导入 useRouter

// 动态导入 CPK 组件
const CPK = dynamic(() => import('./components/tools/CPK'), { ssr: false })

// 默认的 LinkItem 对象，表示“全部”
const defaultLink: LinkItem = {
  title: '全部',
  icon: <></>, // 这里可以传递实际的图标，如果需要
  href: '/',
  tag: 'all'
}

export default withAuth(function Page() {
  const [selectedLink, setSelectedLink] = useState<LinkItem | null>(defaultLink)
  const router = useRouter() // 初始化 useRouter

  const handleLinkClick = (link: LinkItem) => {
    setSelectedLink(link)
    toolStore.setSelectedToolTag(link.tag || 'all') // 设置 selectedToolTag
    router.push('/') // 路由跳转到 '/'
  }

  return (
    <div>
      <ToolsGrid selectedLink={selectedLink} onLinkClick={handleLinkClick} />
      {selectedLink?.href === '/CPK' && <CPK />}
      {/* 添加其他工具组件 */}
    </div>
  )
});