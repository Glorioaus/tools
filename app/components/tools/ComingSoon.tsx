"use client";
import React from 'react'
import { Skeleton } from 'antd'

const ComingSoon: React.FC = () => {
  return (
    <div className="flex flex-col items-center  h-screen">
      <h1 className="text-2xl font-bold mb-4">该功能尚未上线，敬请期待</h1>
      <Skeleton active paragraph={{ rows: 10 }} />
    </div>
  )
}

export default ComingSoon