import { GetStaticPaths } from 'next'
import { getMarkdownPages } from './getMarkdownPages'
import { CategoryContentData, MarkdownContentData } from 'types'

export const getMarkdownStaticPaths: GetStaticPaths = () => {
  let paths: string[] = []

  const getRoutes = (item: CategoryContentData | MarkdownContentData) => {
    paths.push(item.data.route)
    if (item.type === 'category') {
      item.data.items.forEach(getRoutes)
    }
  }
  getMarkdownPages().forEach(getRoutes)

  return { paths, fallback: false }
}
