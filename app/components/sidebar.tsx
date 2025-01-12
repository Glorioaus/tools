'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  Home,
  Video,
  Music,
  Image,
  FileText,
  Database,
  Brain,
  FileSpreadsheet,
  Type,
  Menu
} from 'lucide-react'
import { observer } from 'mobx-react-lite'
import toolStore from '../store'
import { useRouter } from 'next/navigation' // 导入 useRouter

export interface LinkItem {
  title: string
  icon: JSX.Element
  href: string
  tag?: string
}

const Sidebar = observer(({ onLinkClick }: { onLinkClick: (link: LinkItem) => void }) => {
  const [activeLink, setActiveLink] = useState('全部') // 默认激活“全部”
  const router = useRouter() // 初始化 useRouter

  const handleLinkClick = (link: LinkItem) => {
    setActiveLink(link.title)
    toolStore.setSelectedToolTitle(link.title)
    toolStore.setSelectedToolTag(link.tag || 'all') // 设置 selectedToolTag
    onLinkClick(link) // 调用传递的 onLinkClick 函数
    // router.push('/') // 路由跳转到 '/'
  }

  const links = [
    {
      title: '全部',
      icon: <Home className="h-5 w-5" />,
      href: '/',
      tag: 'all'
    },
    {
      title: '排行榜',
      icon: <Menu className="h-5 w-5" />,
      href: '/',
      tag: 'all'
    },
    {
      title: '视频工具',
      icon: <Video className="h-5 w-5" />,
      href: '/',
      tag: 'video'
    },
    {
      title: '音频工具',
      icon: <Music className="h-5 w-5" />,
      href: '/',
      tag: 'audio'
    },
    {
      title: '图片工具',
      icon: <Image className="h-5 w-5" />,
      href: '/',
      tag: 'image'
    },
    {
      title: '文档工具',
      icon: <FileText className="h-5 w-5" />,
      href: '/',
      tag: 'document'
    },
    {
      title: '数据库工具',
      icon: <Database className="h-5 w-5" />,
      href: '/',
      tag: 'all'
    },
    {
      title: 'AI 工具',
      icon: <Brain className="h-5 w-5" />,
      href: '/',
      tag: 'ai'
    },
    {
      title: '表格工具',
      icon: <FileSpreadsheet className="h-5 w-5" />,
      href: '/'
    },
    { title: '文本工具', icon: <Type className="h-5 w-5" />, href: '/' }
  ]

  return (
    <div className="w-64 bg-primary text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="text-2xl font-bold">舜宇工具集</div>
      </div>
      <nav className="space-y-1">
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              activeLink === link.title
                ? 'bg-blue-500 text-white'
                : 'text-white hover:bg-blue-400'
            }`}
            onClick={() => handleLinkClick(link)}
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )
})

export { Sidebar }