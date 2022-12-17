import { FolderItem, ContentData } from 'types'
import { getCategoryData } from './getCategoryData'
import { getDocumentData } from './getDocumentData'

export type TraverseDocs = typeof traverseDocs

export const traverseDocs = ({
  root,
  location,
  item,
  itemIndex,
}: {
  root: string
  location: string
  item: FolderItem
  itemIndex: number
}): ContentData => {
  if (Array.isArray(item)) {
    return getCategoryData({
      root,
      location,
      item,
      itemIndex,
      traverseDocs,
    })
  }

  return getDocumentData({ root, itemIndex, item, location })
}
