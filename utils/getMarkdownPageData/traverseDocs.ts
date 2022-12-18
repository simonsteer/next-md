import { FolderItem, DenormalizedContentData } from 'types'
import { getCategoryData } from './getCategoryData'
import { getDocumentData } from './getDocumentData'

export type TraverseDocs = typeof traverseDocs

export const traverseDocs = ({
  root,
  location,
  item,
  itemIndex,
  itemDepth,
}: {
  root: string
  location: string
  item: FolderItem
  itemIndex: number
  itemDepth: number
}): DenormalizedContentData => {
  if (Array.isArray(item)) {
    return getCategoryData({
      root,
      location,
      item,
      itemIndex,
      itemDepth,
      traverseDocs,
    })
  }

  return getDocumentData({ root, itemIndex, itemDepth, item, location })
}
