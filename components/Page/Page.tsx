import { PageDataProvider } from 'hooks'
import { PageProps } from 'types'
import { Content, Layout } from './components'

export function Page(page: PageProps) {
  return (
    <PageDataProvider value={page}>
      <Layout>
        <Content />
      </Layout>
    </PageDataProvider>
  )
}
