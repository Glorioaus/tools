'use client'

import { Card } from '@/components/ui/card'
import ToolCardContent from './ToolCardContent'
import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import toolStore from '../store'
import { useRouter } from 'next/navigation' // 导入 useRouter

interface LinkItem {
  title: string
  icon: JSX.Element
  href: string
  tag?: string
}

interface Tool {
  icon: string,
  tag: string
  title: string
  description: string
  url: string,
  isShow: boolean
}

interface ToolsGridProps {
  selectedLink?: LinkItem | null;
  onLinkClick: (link: LinkItem) => void;
}

export const tools: Tool[] = [
  {
    icon: 'Images.webp',
    tag: 'image',
    title: 'CPK计算',
    description: '上传文件计算CPK',
    url: '/CPK',
    isShow: true
  },
  {
    icon: 'Stamp.webp',
    tag: 'video',
    title: 'Video Watermark',
    description: 'Add custom watermarks to your videos with adjustable settings',
    url: 'ComingSoon',
    isShow: false,
  },
  {
    icon: 'Monitor.webp',
    tag: 'video',
    title: 'Screen Recording',
    description: 'Record your screen with audio and webcam support',
    url: 'ComingSoon',
    isShow: false,
  },
  {
    icon: 'FileVideo.webp',
    tag: 'video',
    title: 'Video Format Conversion',
    description: 'Convert videos to MP4, AVI, MOV, and other formats',
    url: 'ComingSoon',
    isShow: false,
  },
  {
    icon: 'Scissors.webp',
    tag: 'audio',
    title: 'Audio Cutting',
    description: 'Cut and trim audio files with precision controls',
    url: 'ComingSoon',
    isShow: false,
  },
  {
    icon: 'FileAudio.webp',
    tag: 'audio',
    title: 'Audio Text Conversion',
    description: 'Convert audio to text with support for multiple languages',
    url: 'ComingSoon',
    isShow: false
  },
  {
    icon: 'Music.webp',
    tag: 'audio',
    title: 'Audio Format Conversion',
    description: 'Convert between MP3, WAV, OGG, and other audio formats',
    url: 'ComingSoon',
    isShow: false
  },
  {
    icon: 'ImageIcon.webp',
    tag: 'image',
    title: 'Image Resizing',
    description: 'Resize images while maintaining aspect ratio',
    url: 'ComingSoon',
    isShow: false
  },
  {
    icon: 'Images.webp',
    tag: 'image',
    title: 'Image Editing',
    description: 'Edit images with filters, effects, and adjustments',
    url: 'ComingSoon',
    isShow: false
  },
  {
    icon: 'ImagePlus.webp',
    tag: 'image',
    title: 'Image Stitching',
    description: 'Combine multiple images into a single panorama',
    url: 'ComingSoon',
    isShow: false
  },
  {
    icon: 'FileMerge.webp',
    tag: 'document',
    title: 'PDF Merge',
    description: 'Combine multiple PDF files into a single document',
    url: 'ComingSoon',
    isShow: false
  },
  {
    icon: 'FileText.webp',
    tag: 'document',
    title: 'PDF to Text',
    description: 'Extract text content from PDF documents',
    url: 'ComingSoon',
    isShow: false
  },
  {
    icon: 'FileWord.webp',
    tag: 'document',
    title: 'PDF to Word',
    description: 'Convert PDF documents to editable Word format',
    url: 'ComingSoon',
    isShow: false
  }
]

const ToolsGrid = observer(({ selectedLink, onLinkClick }: ToolsGridProps) => {
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools)
  const router = useRouter() // 初始化 useRouter

  useEffect(() => {
    const nowTools = tools.filter((tool) => tool.isShow)
    if (toolStore.selectedToolTag === 'all') {
      setFilteredTools(nowTools); // 默认显示所有工具
    } else {
      setFilteredTools(nowTools.filter((tool) => tool.tag === toolStore.selectedToolTag)); // 根据 selectedToolTag 过滤工具
    }
  }, [toolStore.selectedToolTag]);

  const handleToolClick = (tool: Tool) => {
    toolStore.setSelectedToolTitle(tool.title)
    router.push(tool.url) // 路由跳转到对应的工具 URL
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredTools.map((tool, index) => (
        <Card
          key={index}
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
          onClick={() => handleToolClick(tool)}
        >
          <ToolCardContent
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            url={tool.url}
            onLinkClick={onLinkClick} // 传递点击事件处理函数
          />
        </Card>
      ))}
    </div>
  )
})

export { ToolsGrid }; // 确保命名导出