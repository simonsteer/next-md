import { DenormalizedContentData, NormalizedPages } from 'types'
import { getContentSnapshot } from './getContentSnapshot'

export const normalizePages = (pages: DenormalizedContentData[]) => {
  const graph: NormalizedPages = {}

  let prev: null | DenormalizedContentData = null
  const itemsToFlatten = [...pages]

  while (itemsToFlatten.length > 0) {
    const curr = itemsToFlatten.shift()!
    if (curr.type === 'category') {
      itemsToFlatten.push(...curr.data.items)
    }

    if (curr.type === 'category') {
      graph[curr.data.route] = {
        ...curr,
        data: {
          ...curr.data,
          items: curr.data.items.map(getContentSnapshot),
        },
      }
    } else {
      graph[curr.data.route] = curr
    }

    prev = curr
  }

  return graph
}
