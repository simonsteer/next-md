import { pick } from 'lodash'
import { BreadcrumbItem, NormalizedPages } from 'types'

export const getBreadcrumbsData = (
  normalized: NormalizedPages,
  route: string
): BreadcrumbItem[] => {
  if (route === '/') {
    return []
  }

  if (route.indexOf('/') === route.lastIndexOf('/')) {
    return [pick(normalized[route].data, ['title', 'route'])]
  }

  return route
    .slice(1)
    .split('/')
    .map((segment, index, segments) => {
      const prev = segments.slice(0, index)
      const segmentRoute = '/' + [...prev, segment].join('/')

      return pick(normalized[segmentRoute].data, ['title', 'route'])
    })
}
