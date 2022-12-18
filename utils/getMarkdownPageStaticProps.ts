import { GetStaticProps } from 'next'
import { PageProps } from 'types'
import {
  getBreadcrumbsData,
  getMarkdownPages,
  getPaginationData,
  getPaths,
  getSidebarData,
  getToCData,
  normalizePages,
} from './getMarkdownPageData'

export const getMarkdownPageStaticProps: GetStaticProps<PageProps> = ctx => {
  const params = (ctx.params!.params || []) as string[]
  const route = params.length === 0 ? '/' : '/' + params.join('/')

  const pages = getMarkdownPages()
  const normalized = normalizePages(pages)
  const paths = getPaths(pages)

  console.log(paths)

  const content = normalized[route]
  const sidebar = getSidebarData(pages, route)
  const toc = getToCData(content)
  const breadcrumbs = getBreadcrumbsData(normalized, route)
  const pagination = getPaginationData(normalized, paths, route)

  return {
    props: {
      breadcrumbs,
      content,
      pagination,
      sidebar,
      toc,
    },
  }
}
