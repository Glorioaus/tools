'use client'
import { Sidebar } from './components/sidebar'
import { ToolsGrid } from './components/tools-grid'
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import CPK from './components/tools/CPK'

export default function Page() {
  const [selectedLink, setSelectedLink] = useState<LinkItem>({
    title: '全部',
    icon: <></>, // 初始时不需要图标
    href: '#',
    tag: 'all'
  })
  const handleLinkClick = (link: LinkItem) => {
    setSelectedLink(link)
  }
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar onLinkClick={handleLinkClick} />
        <main className="flex-1 overflow-auto p-6">
          <h1 className="text-2xl font-semibold text-gray-900 mb-6">
            舜宇工具集
          </h1>
          <Routes>
            <Route
              path="/"
              element={<ToolsGrid selectedLink={selectedLink} />}
            />
            {/* 在这里添加其他工具的路由 */}
            <Route path="/CPK" element={<CPK />} />
            {/* 添加更多路由 */}
          </Routes>
        </main>
      </div>
    </Router>
  )
}
