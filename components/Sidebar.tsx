import clsx from 'clsx'
import { useSidebarData } from 'hooks'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { SidebarCategoryItem, SidebarDocumentItem, SidebarItem } from 'types'

export function Sidebar() {
  const sidebar = useSidebarData()

  return (
    <nav className="text-sm p-2 w-56 dark:text-neutral-100 text-neutral-800 border-r dark:border-neutral-700 border-neutral-200">
      <ul>
        {sidebar.map((item, index) => (
          <li key={index}>
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

const getShouldCategoryBeOpen = (item: SidebarCategoryItem) => {
  let result = false

  const items: SidebarItem[] = [item]
  while (items.length > 0 && result === false) {
    const curr = items.shift()!
    if (curr.type === 'category') items.push(...curr.items)
    result = curr.active
  }

  return result
}

const rowClassName =
  'border dark:border-neutral-800 border-neutral-100 dark:hover:bg-neutral-700 hover:bg-neutral-200 rounded-md h-8 pl-2 overflow-hidden'

const activeClassName = 'dark:bg-neutral-700 bg-neutral-200'

function CategoryItem({ item }: { item: SidebarCategoryItem }) {
  const [isOpen, setIsOpen] = useState(getShouldCategoryBeOpen(item))

  useEffect(() => {
    if (getShouldCategoryBeOpen(item)) {
      setIsOpen(true)
    }
  }, [item])

  let itemChild: ReactNode
  if (item.hasCategoryPage) {
    itemChild = (
      <li
        className={clsx(rowClassName, item.active && activeClassName, 'flex')}
      >
        <Link
          href={item.route}
          className="w-full h-full flex flex-1 items-center"
          onClick={() => setIsOpen(true)}
        >
          <span className="flex flex-1">{item.title}</span>
          <button
            className="group"
            onClick={e => {
              e.preventDefault()
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
          >
            <MenuArrow
              isOpen={isOpen}
              className="dark:group-hover:bg-neutral-600 group-hover:bg-neutral-300"
            />
          </button>
        </Link>
      </li>
    )
  } else {
    itemChild = (
      <li
        className={clsx(rowClassName, item.active && activeClassName, 'flex')}
      >
        <button
          className="w-full h-full flex flex-1 items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex flex-1">{item.title}</span>
          <MenuArrow isOpen={isOpen} />
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
    <div className={clsx(rowClassName, item.active && activeClassName)}>
      <Link
        href={item.route}
        className="block w-full h-full  flex items-center"
      >
        {item.title}
      </Link>
    </div>
  )
}

const MenuArrow = ({
  className,
  isOpen,
}: {
  className?: string
  isOpen: boolean
}) => (
  <div
    className={clsx(
      'w-8 h-8 pt-1 flex items-center justify-center rounded-md',
      isOpen ? 'rotate-180' : 'rotate-90',
      className
    )}
  >
    ^
  </div>
)
