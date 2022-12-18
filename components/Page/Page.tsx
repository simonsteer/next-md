import { PageDataProvider } from 'hooks'
import { PageProps } from 'types'
import {
  Breadcrumbs,
  Content,
  Navbar,
  Pagination,
  Sidebar,
  TableOfContents,
} from './components'

export function Page(page: PageProps) {
  return (
    <PageDataProvider value={page}>
      <div className="flex flex-col min-h-screen relative overflow-y-scroll dark:bg-neutral-800 bg-neutral-100">
        <Navbar />
        <Sidebar />
        <div className="w-full max-w-screen-md mx-auto mt-14 px-4 pt-14 pb-28">
          <Breadcrumbs />
          <Content />
          <Pagination />
        </div>
        <TableOfContents />
      </div>
    </PageDataProvider>
  )
}
