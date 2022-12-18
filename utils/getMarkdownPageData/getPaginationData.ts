import { Pagination, NormalizedPages } from 'types'
import { getContentSnapshot } from './getContentSnapshot'

export const getPaginationData = (
  normalized: NormalizedPages,
  paths: string[],
  route: string
): Pagination => {
  const currentIndex = paths.indexOf(route)

  const prevRoute = paths[currentIndex - 1]
  const nextRoute = paths[currentIndex + 1]

  const prev = prevRoute ? getContentSnapshot(normalized[prevRoute]) : null
  const next = nextRoute ? getContentSnapshot(normalized[nextRoute]) : null

  return { prev, next }
}
