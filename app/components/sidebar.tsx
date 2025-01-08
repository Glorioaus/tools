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
  Type
} from 'lucide-react'

export function Sidebar() {
  const [activeLink, setActiveLink] = useState('全部')

  const handleLinkClick = (title) => {
    setActiveLink(title)
  }

  const links = [
    { title: '全部', icon: <Home className="h-5 w-5" />, href: '#' },
    { title: '视频工具', icon: <Video className="h-5 w-5" />, href: '#' },
    { title: '音频工具', icon: <Music className="h-5 w-5" />, href: '#' },
    { title: '图片工具', icon: <Image className="h-5 w-5" />, href: '#' },
    { title: '文档工具', icon: <FileText className="h-5 w-5" />, href: '#' },
    { title: '数据库工具', icon: <Database className="h-5 w-5" />, href: '#' },
    { title: 'AI 工具', icon: <Brain className="h-5 w-5" />, href: '#' },
    {
      title: '表格工具',
      icon: <FileSpreadsheet className="h-5 w-5" />,
      href: '#'
    },
    { title: '文本工具', icon: <Type className="h-5 w-5" />, href: '#' }
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
            onClick={() => handleLinkClick(link.title)}
          >
            {link.icon}
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
