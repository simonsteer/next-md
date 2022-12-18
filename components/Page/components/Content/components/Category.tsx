import { CategoryData } from 'types'
import { SmartLink } from 'components'

export function Category(page: CategoryData) {
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
            <SmartLink
              href={item.route}
              className="block w-full h-28 px-4 pt-3 pb-4 dark:bg-neutral-700 bg-neutral-200 rounded-md group"
            >
              <div className="group-hover:opacity-50 flex h-full flex-col justify-between">
                <div>
                  <h2 className="font-bold mb-0 dark:text-neutral-100 text-neutral-800">
                    {item.title}
                  </h2>

                  {item.description && (
                    <p className="text-sm dark:text-neutral-300 text-neutral-600 truncate">
                      {item.description}
                    </p>
                  )}
                </div>
                {item.type === 'category' && (
                  <p className="text-xs dark:text-neutral-300 text-neutral-600">
                    {item.numItems} items
                  </p>
                )}
              </div>
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
