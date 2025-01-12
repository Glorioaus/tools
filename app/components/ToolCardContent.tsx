import React, { useState } from 'react'
import Link from 'next/link'

interface ToolCardContentProps {
  icon: string
  title: string
  description: string
  url: string
  onLinkClick: (link: LinkItem) => void
}

const ToolCardContent: React.FC<ToolCardContentProps> = ({
  icon: Icon,
  title,
  description,
  url,
  onLinkClick
}) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    onLinkClick({
      title,
      icon: Icon, // 这里可以传递实际的图标，如果需要
      href: url,
      tag: '' // 这里可以根据需要传递 tag
    })
  }

  return (
    <Link href={url}>
      <div
        className="flex flex-col items-center text-center gap-4 transform transition-transform duration-200"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick} // 添加点击事件
      >
        <div className={`p-3 rounded-lg ${isHovered ? 'scale-110' : ''}`}>
          <div className="flex items-center justify-center w-full h-full">
            <img
              src={`/path/${Icon}`}
              alt={`Icon for ${title}`}
              className="w-10 h-10 text-primary"
            />
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </Link>
  )
}

export default ToolCardContent