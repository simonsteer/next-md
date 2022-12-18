import { pick } from 'lodash'
import { BreadcrumbItem, NormalizedPages } from 'types'
import { getContentSnapshot } from './getContentSnapshot'

export const getBreadcrumbsData = (
  graph: NormalizedPages,
  route: string
): BreadcrumbItem[] => {
  const item = graph[route]
  const breadcrumbs: BreadcrumbItem[] = [pick(item.data, ['title', 'route'])]

  return breadcrumbs
}
