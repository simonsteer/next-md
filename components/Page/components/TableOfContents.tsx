import clsx from 'clsx'
import { useToC } from 'hooks'
import Link from 'next/link'
import { useLayoutEffect } from 'react'
import { useState } from 'react'

export function TableOfContents() {
  const toc = useToC()
  const activeIndex = useActiveToCIndex()

  if (toc.length === 0) return null

  return (
    <aside className="fixed top-14 right-0 w-56 p-2 text-sm dark:text-neutral-400 text-neutral-500">
      <ul className="relative flex flex-col text-sm gap-y-4 before:content-[''] before:absolute before:-left-4 before:top-0.5 before:bottom-0.5 before:w-0.5 dark:before:bg-neutral-700 before:bg-neutral-200">
        {toc.map(({ text, id }, index) => (
          <li
            key={index}
            className={clsx(
              'relative',
              index === activeIndex &&
                "before:content-[''] before:absolute before:-left-4 before:top-0.5 before:bottom-0.5 before:w-0.5 dark:before:bg-neutral-300 before:bg-neutral-600"
            )}
          >
            <Link
              href={`#${id}`}
              className={clsx(
                'block truncate text-ellipsis overflow-hidden',
                index === activeIndex &&
                  'dark:text-neutral-100 text-neutral-800 font-bold'
              )}
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

  useLayoutEffect(() => {
    if (toc.length === 0) return

    const headings = Array.from(
      document.querySelectorAll(toc.map(item => '#' + item.id).join())
    )

    const scrollHandler = () => {
      const el = headings.filter(
        heading => heading.getBoundingClientRect().top >= 0
      )[0]
      let index = headings.findIndex(heading => heading === el)
      if (index === -1) index = headings.length - 1

      setActiveIndex(index)
    }
    scrollHandler()

    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [toc])

  return activeIndex
}
