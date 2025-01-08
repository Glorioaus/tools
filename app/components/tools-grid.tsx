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

const tools = [
  {
    icon: Video,
    title: 'Video Editing',
    description: 'Edit and process video files online with various features',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: Stamp,
    title: 'Video Watermark',
    description:
      'Add custom watermarks to your videos with adjustable settings',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: Monitor,
    title: 'Screen Recording',
    description: 'Record your screen with audio and webcam support',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: FileVideo,
    title: 'Video Format Conversion',
    description: 'Convert videos to MP4, AVI, MOV, and other formats',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: Scissors,
    title: 'Audio Cutting',
    description: 'Cut and trim audio files with precision controls',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: FileAudio,
    title: 'Audio Text Conversion',
    description: 'Convert audio to text with support for multiple languages',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: Music,
    title: 'Audio Format Conversion',
    description: 'Convert between MP3, WAV, OGG, and other audio formats',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: ImageIcon,
    title: 'Image Resizing',
    description: 'Resize images while maintaining aspect ratio',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: Images,
    title: 'Image Editing',
    description: 'Edit images with filters, effects, and adjustments',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: ImagePlus,
    title: 'Image Stitching',
    description: 'Combine multiple images into a single panorama',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: FileMerge,
    title: 'PDF Merge',
    description: 'Combine multiple PDF files into a single document',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: FileText,
    title: 'PDF to Text',
    description: 'Extract text content from PDF documents',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  },
  {
    icon: FileWord,
    title: 'PDF to Word',
    description: 'Convert PDF documents to editable Word format',
    url: 'https://sso.sunnyoptical.cn/login?service=https%3A%2F%2Fioa.sunnyoptical.cn%2Fwui%2Fmain.jsp'
  }
]

const handleCardClick = (url: string) => {
  window.open(url, '_blank') // 在新标签页中打开链接
  // 或者使用 history.push(url) 如果你希望在同一个页面中导航
}
export function ToolsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tools.map((tool, index) => (
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
