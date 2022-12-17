import { GetStaticProps } from 'next'
import { getMarkdownPages } from './getMarkdownPages'
import { PageContent, PageData } from 'types'
import { getSidebarData } from './getSidebarData'

export const getMarkdownPageStaticProps: GetStaticProps<PageData> = ctx => {
  const params = (ctx.params!.params || []) as string[]
  const route = params.length === 0 ? '/' : '/' + params.join('/')

  const markdownPages = getMarkdownPages()

  let pagesToCheck = [...markdownPages]

  let content: PageContent | null = null
  const getPage = (item: PageContent) => {
    switch (item.type) {
      case 'category':
        if (item.data.route === route && item.data.hasCategoryPage) {
          content = item
        } else {
          pagesToCheck.push(...item.data.items)
        }
        break
      case 'document':
        if (item.data.route === route) {
          content = item
        }
        break
      default:
        break
    }
  }
  while (content === null && pagesToCheck.length) {
    getPage(pagesToCheck.shift()!)
  }

  const sidebar = getSidebarData(markdownPages, route)

  return { props: { content: content!, sidebar } }
}
