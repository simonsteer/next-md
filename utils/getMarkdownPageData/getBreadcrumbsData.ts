import { ContentSnapshot, NormalizedPages } from 'types'
import { getContentSnapshot } from './getContentSnapshot'

export const getBreadcrumbsData = (
  normalized: NormalizedPages,
  route: string
): ContentSnapshot[] => {
  if (route === '/') {
    return []
  }

  if (route.indexOf('/') === route.lastIndexOf('/')) {
    return [getContentSnapshot(normalized[route])]
  }

  return route
    .slice(1)
    .split('/')
    .map((segment, index, segments) => {
      const prev = segments.slice(0, index)
      const segmentRoute = '/' + [...prev, segment].join('/')

      return getContentSnapshot(normalized[segmentRoute])
    })
}
