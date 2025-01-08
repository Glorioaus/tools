// ToolCardContent.tsx
'use client'
import React, { useState } from 'react' 

interface ToolCardContentProps {
  // icon: React.ComponentType<{ className?: string }>
  icon: string
  title: string
  description: string
  url: string,
}

const ToolCardContent: React.FC<ToolCardContentProps> = ({
  icon: Icon,
  title,
  description,
  url
}) => {
  const [isHovered, setIsHovered] = useState(false) // new state
  const handleCardClick = () => {
    window.open(url, '_blank') // 在新标签页中打开链接
    // 或者使用 history.push(url) 如果你希望在同一个页面中导航
  }

  return (
    <div
      className="flex flex-col items-center text-center gap-4 transform transition-transform duration-200"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)} // set isHovered to true when mouse enter
      onMouseLeave={() => setIsHovered(false)} // set isHovered to false when mouse leave
    >
      <div className={`p-3 rounded-lg ${isHovered ? 'scale-110' : ''}`}> {/* use state to control classes */}
        <img src={`/path/${Icon}`} alt={`Icon for ${title}`} className="w-10 h-10 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default ToolCardContent
