import { GetStaticPaths } from 'next'
import { getMarkdownPages } from './getMarkdownPages'
import { MarkdownCategory, MarkdownDocument } from 'types'

export const getMarkdownStaticPaths: GetStaticPaths = () => {
  let paths: string[] = []

  const getRoutes = (item: MarkdownCategory | MarkdownDocument) => {
    paths.push(item.data.route)
    if (item.type === 'category') {
      item.data.items.forEach(getRoutes)
    }
  }
  getMarkdownPages().forEach(getRoutes)

  return { paths, fallback: false }
}
