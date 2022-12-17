import Link from 'next/link'
import { CategoryContentData } from 'types'

export function CategoryContent(page: CategoryContentData) {
  const { description, title, items } = page.data

  return (
    <div>
      <h1 className="text-3xl font-bold mb-14 dark:text-neutral-100 text-neutral-800">
        {title}
      </h1>
      {description && (
        <p className="dark:text-neutral-300 text-neutral-600 text-sm mb-8 max-w-lg">
          {description}
        </p>
      )}
      <ul className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.data.route}
              className="block w-full h-28 px-4 pt-3 pb-4 dark:bg-neutral-700 bg-neutral-200 rounded-md group"
            >
              <div className="group-hover:opacity-50">
                <h2 className="font-bold mb-0 dark:text-neutral-100 text-neutral-800">
                  {item.data.title}
                </h2>
                {item.type === 'category' && (
                  <p className="text-sm dark:text-neutral-300 text-neutral-600">
                    {item.data.items.length} items
                  </p>
                )}
                {item.type === 'document' && (
                  <p className="text-sm dark:text-neutral-300 text-neutral-600">
                    {item.data.title}
                  </p>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
