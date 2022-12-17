import clsx from 'clsx'
import { useSidebarData } from 'hooks'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { SidebarCategoryItem, SidebarDocumentItem, SidebarItem } from 'types'

export function Sidebar() {
  const sidebar = useSidebarData()

  return (
    <nav className="text-sm p-2 w-56">
      <ul>
        {sidebar.map((item, index) => (
          <li key={index} className="mt-0.5">
            <SidebarItemComponent item={item} />
          </li>
        ))}
      </ul>
    </nav>
  )
}

function SidebarItemComponent({ item }: { item: SidebarItem }) {
  switch (item.type) {
    case 'category':
      return <CategoryItem item={item} />
    case 'document':
      return <DocumentItem item={item} />
    default:
      return null
  }
}

function CategoryItem({ item }: { item: SidebarCategoryItem }) {
  const [isOpen, setIsOpen] = useState(() => {
    let result = false

    const items: SidebarItem[] = [item]
    while (items.length > 0 && result === false) {
      const curr = items.shift()!
      result = curr.active
      if (curr.type === 'category') {
        console.log(curr)
        items.push(...curr.items)
      }
    }

    return result
  })

  let itemChild: ReactNode
  if (item.hasCategoryPage) {
    itemChild = (
      <li className={clsx('h-6 flex', item.active && 'bg-stone-100')}>
        <Link href={item.route} className="w-full h-full flex flex-1">
          <span className="flex flex-1">{item.title}</span>
          <button
            onClick={e => {
              e.preventDefault()
              setIsOpen(!isOpen)
            }}
            className={clsx(
              'w-6 h-6 flex items-center justify-center',
              isOpen ? 'rotate-180' : 'rotate-90'
            )}
          >
            ^
          </button>
        </Link>
      </li>
    )
  } else {
    itemChild = (
      <li className={clsx('h-6 flex', item.active && 'bg-stone-100')}>
        <button
          className="w-full h-full flex flex-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex flex-1">{item.title}</span>
          <div
            className={clsx(
              'w-6 h-6 flex items-center justify-center',
              isOpen ? 'rotate-180' : 'rotate-90'
            )}
          >
            ^
          </div>
        </button>
      </li>
    )
  }

  return (
    <ul>
      {itemChild}
      {isOpen && (
        <li className="ml-4 mt-0.5">
          {item.items.map((item, index) => (
            <SidebarItemComponent key={index} item={item} />
          ))}
        </li>
      )}
    </ul>
  )
}

function DocumentItem({ item }: { item: SidebarDocumentItem }) {
  return (
    <div className={clsx('h-6', item.active && 'bg-stone-100')}>
      <Link href={item.route} className="block w-full h-full">
        {item.title}
      </Link>
    </div>
  )
}
