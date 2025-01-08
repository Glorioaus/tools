// ToolCardContent.tsx
'use client'
import React from 'react'

interface ToolCardContentProps {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  url: string
}

const ToolCardContent: React.FC<ToolCardContentProps> = ({
  icon: Icon,
  title,
  description,
  url
}) => {
  const handleCardClick = () => {
    window.open(url, '_blank') // 在新标签页中打开链接
    // 或者使用 history.push(url) 如果你希望在同一个页面中导航
  }

  return (
    <div
      className="flex flex-col items-center text-center gap-4"
      onClick={handleCardClick}
    >
      <div className="p-3 bg-primary/10 rounded-lg">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default ToolCardContent
