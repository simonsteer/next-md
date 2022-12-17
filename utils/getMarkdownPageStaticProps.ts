import { GetStaticProps } from 'next'
import { getMarkdownPages } from './getMarkdownPages'
import { PageData } from 'types'
import { getSidebarData } from './getSidebarData'
import { getToCData } from './getToCData'
import { getPageByRoute } from './getPageByRoute'

export const getMarkdownPageStaticProps: GetStaticProps<PageData> = ctx => {
  const params = (ctx.params!.params || []) as string[]
  const route = params.length === 0 ? '/' : '/' + params.join('/')

  const markdownPages = getMarkdownPages()

  const content = getPageByRoute(markdownPages, route)
  const sidebar = getSidebarData(markdownPages, route)
  const toc = getToCData(content)

  return { props: { content: content, sidebar, toc } }
}
