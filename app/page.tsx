import { Sidebar } from "./components/sidebar"
import { ToolsGrid } from "./components/tools-grid"

export default function Page() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-auto p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">舜宇工具集</h1>
        <ToolsGrid />
      </main>
    </div>
  )
}

