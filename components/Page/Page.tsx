import { PageDataProvider } from 'hooks'
import { PageData } from 'types'
import { Sidebar, TableOfContents, Navbar } from 'components'
import { PageContent } from './components'

export function Page(page: PageData) {
  return (
    <PageDataProvider value={page}>
      <div className="flex flex-col min-h-screen relative overflow-y-scroll">
        <Navbar />
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex-1">
            <PageContent />
          </div>
          <TableOfContents />
        </div>
      </div>
    </PageDataProvider>
  )
}
