import { useSidebarData } from 'hooks'
import Link from 'next/link'
import { useState } from 'react'
import { SidebarCategoryItem, SidebarDocumentItem, SidebarItem } from 'types'

export function Sidebar() {
  const sidebar = useSidebarData()

  return (
    <nav>
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

function CategoryItem({ item }: { item: SidebarCategoryItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ul>
      <li>
        <button onClick={() => setIsOpen(!isOpen)}>{item.title}</button>
      </li>
      {isOpen && (
        <li>
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
    <div>
      <Link href={item.route}>{item.title}</Link>
    </div>
  )
}
