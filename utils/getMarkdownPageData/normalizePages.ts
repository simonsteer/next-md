import { DenormalizedContentData, NormalizedPages } from 'types'
import { getContentSnapshot } from './getContentSnapshot'

export const normalizePages = (pages: DenormalizedContentData[]) =>
  pages.reduce(flatten, {})

const flatten = (
  acc: NormalizedPages,
  item: DenormalizedContentData
): NormalizedPages => {
  if (item.type === 'category') {
    const items = item.data.items.map(item => {
      flatten(acc, item)
      return getContentSnapshot(item)
    })
    if (item.data.hasCategoryPage) {
      acc[item.data.route] = {
        ...item,
        data: { ...item.data, items },
      }
    }
  } else {
    acc[item.data.route] = item
  }

  return acc
}
