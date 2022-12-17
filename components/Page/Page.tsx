import { PageDataProvider } from 'hooks'
import { PageProps } from 'types'
import { Sidebar, TableOfContents, Navbar } from 'components'
import { Content } from './components'

export function Page(page: PageProps) {
  return (
    <PageDataProvider value={page}>
      <div className="flex flex-col min-h-screen relative overflow-y-scroll dark:bg-neutral-800 bg-neutral-100">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1 p-12">
            <div className="w-full max-w-screen-md mx-auto">
              <Content />
            </div>
          </div>
          <TableOfContents />
        </div>
      </div>
    </PageDataProvider>
  )
}
