import clsx from 'clsx'
import { useSidebar } from 'hooks'
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { SidebarCategoryItem, SidebarDocumentItem, SidebarItem } from 'types'

export function Sidebar() {
  const sidebar = useSidebar()

  return (
    <nav
      className={clsx(
        'text-sm dark:text-neutral-100 text-neutral-800 border-r dark:border-neutral-700 border-neutral-200',
        'dark:bg-neutral-800 bg-neutral-100',
        'w-64 p-2 pb-28 fixed top-14 left-0 bottom-0 overflow-y-scroll'
      )}
    >
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
  const getHasActiveItem = (acc: boolean, item: SidebarItem): boolean => {
    if (acc === true || item.active) return true
    if (item.type === 'category') {
      return item.items.reduce(getHasActiveItem, false)
    }
    return false
  }
  return [item].reduce(getHasActiveItem, false)
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
          prefetch={false}
          href={item.route}
          className="w-full h-full flex flex-1 items-center"
          onClick={() => setIsOpen(true)}
        >
          <span className="block flex-1 truncate text-ellipsis overflow-hidden">
            {item.title}
          </span>
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
          <span className="flex-1 truncate text-ellipsis overflow-hidden">
            {item.title.repeat(9)}
          </span>
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
        prefetch={false}
        href={item.route}
        className="block w-full h-full flex items-center"
      >
        <span className="block truncate text-ellipsis overflow-hidden">
          {item.title}
        </span>
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
      'w-8 h-8 pt-1.5 flex items-center justify-center rounded-md text-lg',
      isOpen ? 'rotate-180' : 'rotate-90',
      className
    )}
  >
    ^
  </div>
)
