import dynamic from 'next/dynamic'

const CPK = dynamic(() => import('../components/tools/CPK'), { ssr: false })

export default function CPKPage() {
  return <CPK />
}