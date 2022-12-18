import { ReactNode } from 'react'
import {
  Breadcrumbs,
  Navbar,
  Pagination,
  Sidebar,
  TableOfContents,
} from './components'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen relative overflow-y-scroll dark:bg-neutral-800 bg-neutral-100">
      <Navbar />
      <Sidebar />
      <div className="w-full max-w-screen-md mx-auto mt-14 px-4 pt-14 pb-28">
        <Breadcrumbs />
        {children}
        <Pagination />
      </div>
      <TableOfContents />
    </div>
  )
}
