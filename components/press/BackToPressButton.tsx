'use client'
import { useRouter } from 'next/navigation'

export const BackToPressButton = () => {
  const router = useRouter()

  const handleBack = () => {
    router.back()
  }

  return (
    <button onClick={handleBack} className="article__back-button">
      &#x2039; Back to Press
    </button>
  )
}
