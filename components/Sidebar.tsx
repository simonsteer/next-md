import clsx from 'clsx'
import { useSidebarData } from 'hooks'
import Link from 'next/link'
import { useState } from 'react'
import { useMeasure } from 'react-use'
import { SidebarCategoryItem, SidebarDocumentItem, SidebarItem } from 'types'
import { ThemeToggle } from './ThemeToggle'

export function Sidebar() {
  const sidebar = useSidebarData()

  return (
    <nav className="w-72 dark:bg-stone-800 bg-stone-50 h-screen sticky top-0 border-r dark:border-stone-700 border-stone-200">
      <ThemeToggle className="w-10 h-10 dark:bg-stone-50 bg-stone-800 rounded-full block ml-auto mt-4 mr-4" />
      <ul className="p-1 text-xs">
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

function CategoryItem({ item }: { item: SidebarCategoryItem }) {
  const [isOpen, setIsOpen] = useState(false)
  const [ref, measurements] = useMeasure<HTMLDivElement>()

  return (
    <ul className="relative">
      <li
        className="z-0 dark:text-stone-50 text-stone-800 border dark:border-stone-800 border-stone-50"
        style={{ height: ITEM_LINE_HEIGHT }}
      >
        <button
          className={clsx(
            'w-full h-full flex items-center px-2 rounded-lg',
            'transition-colors dark:hover:bg-stone-700 hover:bg-stone-200',
            item.active && 'dark:bg-stone-700 bg-stone-200'
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.title}
        </button>
      </li>
      <li
        className="overflow-hidden z-10"
        style={{
          height: isOpen ? measurements.height : 0,
        }}
      >
        <div ref={ref} className="ml-3 flex flex-col">
          {item.items.map((item, index) => (
            <SidebarItemComponent key={index} item={item} />
          ))}
        </div>
      </li>
    </ul>
  )
}

function DocumentItem({ item }: { item: SidebarDocumentItem }) {
  return (
    <div
      className="dark:text-stone-400 text-stone-400 border dark:border-stone-800 border-stone-50"
      style={{ height: ITEM_LINE_HEIGHT }}
    >
      <Link
        href={item.route}
        className={clsx(
          'w-full h-full flex items-center px-2 rounded-lg',
          'dark:hover:bg-stone-700 hover:bg-stone-200 transition-colors',
          item.active && 'dark:bg-stone-700 bg-stone-200'
        )}
      >
        {item.title}
      </Link>
    </div>
  )
}

const ITEM_LINE_HEIGHT = 28
