import { useEffect, useState } from "react"

export function ScrollProgressBar() {
  const [p, setP] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement
      const scrollTop = doc.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      setP(progress)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="absolute left-0 right-0 bottom-0 h-[2px] bg-white/10">
      <div
        className="h-full bg-[#3B82F6] origin-left"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  )
}
