import { Card } from "@/components/ui/card"
import { Video, Stamp, Monitor, FileVideo, Scissors, FileAudio, Music, ImageIcon, Images, ImagePlus, FileDiffIcon as FileMerge, FileText, FileIcon as FileWord } from 'lucide-react'

const tools = [
  {
    icon: Video,
    title: "Video Editing",
    description: "Edit and process video files online with various features"
  },
  {
    icon: Stamp,
    title: "Video Watermark",
    description: "Add custom watermarks to your videos with adjustable settings"
  },
  {
    icon: Monitor,
    title: "Screen Recording",
    description: "Record your screen with audio and webcam support"
  },
  {
    icon: FileVideo,
    title: "Video Format Conversion",
    description: "Convert videos to MP4, AVI, MOV, and other formats"
  },
  {
    icon: Scissors,
    title: "Audio Cutting",
    description: "Cut and trim audio files with precision controls"
  },
  {
    icon: FileAudio,
    title: "Audio Text Conversion",
    description: "Convert audio to text with support for multiple languages"
  },
  {
    icon: Music,
    title: "Audio Format Conversion",
    description: "Convert between MP3, WAV, OGG, and other audio formats"
  },
  {
    icon: ImageIcon,
    title: "Image Resizing",
    description: "Resize images while maintaining aspect ratio"
  },
  {
    icon: Images,
    title: "Image Editing",
    description: "Edit images with filters, effects, and adjustments"
  },
  {
    icon: ImagePlus,
    title: "Image Stitching",
    description: "Combine multiple images into a single panorama"
  },
  {
    icon: FileMerge,
    title: "PDF Merge",
    description: "Combine multiple PDF files into a single document"
  },
  {
    icon: FileText,
    title: "PDF to Text",
    description: "Extract text content from PDF documents"
  },
  {
    icon: FileWord,
    title: "PDF to Word",
    description: "Convert PDF documents to editable Word format"
  }
]

export function ToolsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {tools.map((tool, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <tool.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold mb-2">{tool.title}</h3>
              <p className="text-sm text-gray-500">{tool.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}

