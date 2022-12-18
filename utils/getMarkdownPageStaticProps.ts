import { GetStaticProps } from 'next'
import { getMarkdownPages } from './getMarkdownPageData'
import { PageProps } from 'types'
import {
  getSidebarData,
  getToCData,
  getBreadcrumbsData,
  normalizePages,
} from './getMarkdownPageData'

export const getMarkdownPageStaticProps: GetStaticProps<PageProps> = ctx => {
  const params = (ctx.params!.params || []) as string[]
  const route = params.length === 0 ? '/' : '/' + params.join('/')

  const markdownPages = getMarkdownPages()
  const normalized = normalizePages(markdownPages)

  const content = normalized[route]
  const sidebar = getSidebarData(markdownPages, route)
  const toc = getToCData(content)
  const breadcrumbs = getBreadcrumbsData(normalized, route)

  return { props: { content, sidebar, toc, breadcrumbs } }
}
