import { PageDataProvider } from 'hooks'
import { PageData } from 'types'
import { Sidebar } from 'components'
import { PageContent } from './components'

export function Page(page: PageData) {
  return (
    <PageDataProvider value={page}>
      <nav className="dark:bg-stone-800 bg-stone-50 border-b dark:border-stone-700 border-stone-200 w-full h-14"></nav>
      <div className="flex min-h-screen">
        <Sidebar />
        <PageContent />
      </div>
    </PageDataProvider>
  )
}
