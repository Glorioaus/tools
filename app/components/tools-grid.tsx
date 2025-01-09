'use client'

import { Card } from '@/components/ui/card'
import ToolCardContent from './ToolCardContent'
import {
  Video,
  Stamp,
  Monitor,
  FileVideo,
  Scissors,
  FileAudio,
  Music,
  ImageIcon,
  Images,
  ImagePlus,
  FileDiffIcon as FileMerge,
  FileText,
  FileIcon as FileWord
} from 'lucide-react'
import { useEffect, useState } from 'react'

interface LinkItem {
  title: string
  icon: JSX.Element
  href: string
  tag?: string
}

interface Tool {
  icon: any
  tag: string
  title: string
  description: string
  url: string
}

interface ToolsGridProps {
  selectedLink: LinkItem
}

const tools: Tool[] = [
  {
    // icon: Video,
    icon: 'Images.webp',
    tag: 'image',
    title: 'CPK计算',
    description: '上传文件计算CPK',
    url: '/CPK'
  },
  // {
  //   // icon: Video,
  //   icon: 'video-icon.webp',
  //   tag: 'video',
  //   title: 'Video Editing',
  //   description: 'Edit and process video files online with various features',
  //   url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  // },
  {
    // icon: Stamp,
    icon: 'Stamp.webp',
    tag: 'video',
    title: 'Video Watermark',
    description:
      'Add custom watermarks to your videos with adjustable settings',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: Monitor,
    icon: 'Monitor.webp',
    tag: 'video',
    title: 'Screen Recording',
    description: 'Record your screen with audio and webcam support',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: FileVideo,
    icon: 'FileVideo.webp',
    tag: 'video',
    title: 'Video Format Conversion',
    description: 'Convert videos to MP4, AVI, MOV, and other formats',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: Scissors,
    icon: 'Scissors.webp',
    tag: 'audio',
    title: 'Audio Cutting',
    description: 'Cut and trim audio files with precision controls',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: FileAudio,
    icon: 'FileAudio.webp',
    tag: 'audio',
    title: 'Audio Text Conversion',
    description: 'Convert audio to text with support for multiple languages',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: Music,
    icon: 'Music.webp',
    tag: 'audio',
    title: 'Audio Format Conversion',
    description: 'Convert between MP3, WAV, OGG, and other audio formats',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: ImageIcon,
    icon: 'ImageIcon.webp',
    tag: 'image',
    title: 'Image Resizing',
    description: 'Resize images while maintaining aspect ratio',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: Images,
    icon: 'Images.webp',
    tag: 'image',
    title: 'Image Editing',
    description: 'Edit images with filters, effects, and adjustments',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: ImagePlus,
    icon: 'ImagePlus.webp',
    tag: 'image',
    title: 'Image Stitching',
    description: 'Combine multiple images into a single panorama',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: FileMerge,
    icon: 'FileMerge.webp',
    tag: 'document',
    title: 'PDF Merge',
    description: 'Combine multiple PDF files into a single document',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: FileText,
    icon: 'FileText.webp',
    tag: 'document',
    title: 'PDF to Text',
    description: 'Extract text content from PDF documents',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    // icon: FileWord,
    icon: 'FileWord.webp',
    tag: 'document',
    title: 'PDF to Word',
    description: 'Convert PDF documents to editable Word format',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  }
]

export function ToolsGrid({ selectedLink }: ToolsGridProps) {
  const [filteredTools, setFilteredTools] = useState<Tool[]>(tools)

  useEffect(() => {
    if (selectedLink.tag === 'all') {
      setFilteredTools(tools)
    } else {
      setFilteredTools(tools.filter((tool) => tool.tag === selectedLink.tag))
    }
  }, [selectedLink])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {filteredTools.map((tool, index) => (
        <Card
          key={index}
          className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <ToolCardContent
            icon={tool.icon}
            title={tool.title}
            description={tool.description}
            url={tool.url}
          />
        </Card>
      ))}
    </div>
  )
}
