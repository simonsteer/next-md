import { useToC } from 'hooks'
import Link from 'next/link'

export function TableOfContents() {
  const toc = useToC()

  return (
    <aside className="w-56 p-2 text-sm dark:text-neutral-100 text-neutral-800">
      <ul>
        {toc.map(({ text, id }, index) => (
          <li key={index}>
            <Link href={`#${id}`}>{text}</Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}
