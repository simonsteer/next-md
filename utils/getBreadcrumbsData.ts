import { BreadcrumbItem } from 'types'
import { getMarkdownPages } from './getMarkdownPages'

export function getBreadcrumbsData(
  data: ReturnType<typeof getMarkdownPages>,
  route: string
): BreadcrumbItem[] {
  return data.reduce((acc, item) => {
    return acc
  }, [] as BreadcrumbItem[])
}
