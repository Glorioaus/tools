'use client'

import { Link, useNavigate } from 'react-router-dom'
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

interface LinkItem {
  title: string
  icon: JSX.Element
  href: string
  tag?: string
}
interface SidebarProps {
  onLinkClick: (link: { title: string; href: string; tag?: string }) => void
}
export function Sidebar({ onLinkClick }: SidebarProps) {
  const navigate = useNavigate()
  const [activeLink, setActiveLink] = useState('')

  const handleLinkClick = (link: LinkItem) => {
    setActiveLink(link.title)
    onLinkClick(link)
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
      tag: 'dotument'
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
            to={link.href}
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
}
