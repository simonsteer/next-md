import { uniq } from 'lodash'
import { DenormalizedContentData } from 'types'

export const getPaths = (items: DenormalizedContentData[]) =>
  uniq(
    items.reduce((acc, item) => {
      acc.push(item.data.route)
      if (item.type === 'category') {
        acc.push(...getPaths(item.data.items).flatMap(paths => paths))
      }
      return acc
    }, [] as string[])
  )
