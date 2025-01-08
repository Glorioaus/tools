import Link from 'next/link'
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
  return (
    <div className="w-64 bg-primary text-white p-4">
      <div className="flex items-center gap-2 mb-8">
        <div className="text-2xl font-bold">舜宇工具集</div>
      </div>
      <nav className="space-y-1">
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <Home className="h-5 w-5" />
          全部
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <Video className="h-5 w-5" />
          视频工具
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <Music className="h-5 w-5" />
          音频工具
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <Image className="h-5 w-5" />
          图片工具
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <FileText className="h-5 w-5" />
          文档处理
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <Database className="h-5 w-5" />
          数据图表
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <Brain className="h-5 w-5" />
          智能文本
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <FileSpreadsheet className="h-5 w-5" />
          办公辅助
        </Link>
        <Link
          href="#"
          className="flex items-center gap-2 px-4 py-2 text-white hover:bg-primary/50 rounded-lg"
        >
          <Type className="h-5 w-5" />
          文本工具
        </Link>
      </nav>
    </div>
  )
}
