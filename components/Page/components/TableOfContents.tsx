import { useToC } from 'hooks'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'

export function TableOfContents() {
  const toc = useToC()
  const activeIndex = useActiveToCIndex()

  if (toc.length === 0) return null

  return (
    <aside className="fixed top-14 right-0 w-56 p-2 text-sm dark:text-neutral-100 text-neutral-800">
      <ul className="flex flex-col gap-y-6 text-sm">
        {toc.map(({ text, id }, index) => (
          <li key={index}>
            <Link
              href={`#${id}`}
              className="block truncate text-ellipsis overflow-hidden"
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

const useActiveToCIndex = () => {
  const toc = useToC()
  const [activeIndex, setActiveIndex] = useState(-1)

  useEffect(() => {
    if (toc.length === 0) return

    const headingElements = Array.from(
      document.querySelectorAll(toc.map(item => '#' + item.id).join())
    )

    const scrollHandler = () => {
      console.log(headingElements)
    }
    scrollHandler()

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [toc])

  return activeIndex
}
