import { useToCData } from 'hooks'
import Link from 'next/link'

export function TableOfContents() {
  const toc = useToCData()

  return (
    <aside>
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
