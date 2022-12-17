import Link from 'next/link'
import { MarkdownCategory } from 'types'

export function CategoryContent(page: MarkdownCategory) {
  const { description, title, items } = page.data

  return (
    <div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.data.route}>{item.data.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
