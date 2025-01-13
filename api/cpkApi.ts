import { useState } from 'react'
const apiUrl = process.env.NEXT_PUBLIC_BASE_API
export const uploadFile = async (file: File) => {
  const formData = new FormData()
  formData.append('file', file)
  console.log('apiUrl:', apiUrl)
  try {
    const response = await fetch(`${apiUrl}/cpkapi/upload_cpk_xlsx`, {
      method: 'POST',
      body: formData
    })

    if (response.ok) {
      const data = await response.json()
      console.log('文件上传成功:', data)
      return { success: true, data }
    } else {
      console.error('文件上传失败:', response.statusText)
      return { success: false, error: response.statusText }
    }
  } catch (error) {
    console.error('文件上传错误:', error)
    return { success: false, error: (error as Error).message || '未知错误' }
  }
}

export const sendFileName = async (fileName: string) => {
  try {
    const response = await fetch(`${apiUrl}/cpkapi/cpk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filename: fileName })
    })

    if (response.ok) {
      const data = await response.blob()

      return { success: true, data }
    } else {
      const errorText = await response.text()
      console.error('文件名称发送失败:', errorText)
      return { success: false, error: errorText }
    }
  } catch (error) {
    console.error('文件名称发送错误:', error)
    return { success: false, error: (error as Error).message || '未知错误' }
  }
}
