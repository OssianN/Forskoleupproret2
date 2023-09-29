import { PressNavigation } from '@/components/press/PressNavigation'

export default function RegularLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="press-layout">
      <PressNavigation />
      <div>{children}</div>
    </div>
  )
}
