import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ToolCardContentProps {
  icon: string
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
  const [isHovered, setIsHovered] = useState(false)
  const navigate = useNavigate() // 使用 useNavigate 钩子

  const handleCardClick = () => {
    navigate(url) // 使用 navigate 进行路由跳转
  }

  return (
    <div
      className="flex flex-col items-center text-center gap-4 transform transition-transform duration-200"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
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
  )
}

export default ToolCardContent
