"use client";
import React, { useState } from 'react'
import { Upload, message, Button } from 'antd'
import { InboxOutlined, UploadOutlined } from '@ant-design/icons'
import { uploadFile, sendFileName } from '@/api/cpkApi'
const { Dragger } = Upload

const CPK: React.FC = () => {
  // 保存文件上传状态，用于启用/禁用"生成"按钮
  const [fileUploaded, setFileUploaded] = useState(false)
  // 保存文件名称
  const [fileName, setFileName] = useState<string | null>(null)
  // 保存图片
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  // 保存加载状态
  const [loading, setLoading] = useState(false)

  const handleSendFileName = async () => {
    if (!fileName) {
      message.error('请选择一个文件')
      return
    }

    setLoading(true) // 设置加载状态
    try {
      const result = await sendFileName(fileName)
      if (result.success) {
        console.log('文件名称发送成功')
        const objectUrl = URL.createObjectURL(result.data as Blob)
        setImageUrl(objectUrl)
        message.success('生成成功')
      } else {
        console.error('文件名称发送失败:', result.error)
        message.error('生成失败')
      }
    } catch (error) {
      console.error('生成失败:', error)
      message.error('生成失败')
    } finally {
      setLoading(false) // 清除加载状态
    }
  }

  const props = {
    name: 'file',
    action: '/upload', // 替换为你的上传接口地址
    beforeUpload: async (file: File) => {
      // 验证文件类型
      const validTypes = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ]
      if (!validTypes.includes(file.type)) {
        message.error('请选择一个有效的 Excel 文件 (.xls 或 .xlsx)')
        return Promise.reject()
      }
      // 验证文件大小（最大20MB）
      const maxSize = 20 * 1024 * 1024 // 20MB in bytes
      if (file.size > maxSize) {
        message.error('文件大小不能超过 20MB')
        return Promise.reject()
      }
      // 使用自定义的 uploadFile 接口进行文件上传
      const result = await uploadFile(file)
      if (result.success) {
        message.success(`${file.name} 文件上传成功`)
        setFileUploaded(true)
        setFileName(file.name)
      } else {
        message.error(`文件上传失败: ${result.error}`)
        setFileUploaded(false)
        setFileName('')
      }
      // 返回 false 停止自动上传
      return false
    },
    onChange: (info: any) => {
      const { file, fileList } = info
      if (file.status === 'done') {
        // 文件上传成功
        message.success(`${file.name} 文件上传成功`)
        setFileUploaded(true)
        setFileName(file.name)
      } else if (file.status === 'error') {
        // 文件上传失败
        message.error(`${file.name} 文件上传失败`)
        setFileUploaded(false)
        setFileName('')
      } else if (file.status === 'uploading') {
        // 文件正在上传
        setLoading(true)
      } else if (file.status === 'removed') {
        // 文件被移除
        setFileUploaded(false)
        setFileName(null)
        setImageUrl(null)
        setLoading(false)
      }

      // 清除之前的文件列表
      if (fileList.length >= 1) {
        fileList.shift() // 移除第一个文件，只保留最新的文件
      }
    }
  }

  return (
    <div>
      <Dragger {...props}>
        <p className='ant-upload-drag-icon'>
          <InboxOutlined />
        </p>
        <p className='ant-upload-text'>
          点击或拖动文件到此区域上传
        </p>
        <p className='ant-upload-hint'>
          单次上传一个EXCEL文件，且最大不能超过20MB
        </p>
        <Button icon={<UploadOutlined />}>点击上传</Button>
      </Dragger>
      {/* "生成"按钮，只有在文件上传成功后才可以使用 */}
      <div className="flex items-center justify-between space-y-2.5">
        <p className="italic md:not-italic">生成文件：{fileName}</p>
        <Button
          className='space-y-1.5'
          onClick={handleSendFileName}
          disabled={!fileUploaded}
          loading={loading} // 添加加载状态
        >
          生成CPK
        </Button>
      </div>

      {/* 显示图片 */}
      {imageUrl && (
        <img
          src={imageUrl}
          alt='Generated CPK'
          className="size-max space-y-2.5"
        />
      )}
    </div>
  )
}

export default CPK