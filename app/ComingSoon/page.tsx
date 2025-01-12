import dynamic from 'next/dynamic'

const ComingSoon = dynamic(() => import('../components/tools/ComingSoon'), { ssr: false })

export default function ComingSoonPage() {
  return <ComingSoon />
}