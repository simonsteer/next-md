import fs from 'fs'
import { omit } from 'lodash'
import path from 'path'
import {
  ContentConfig,
  JSONObject,
  DenormalizedCategoryData,
  FolderItem,
} from 'types'
import { getCategoryConfig } from './getCategoryConfig'
import { TraverseDocs } from './traverseDocs'

export const getCategoryData = ({
  root,
  location,
  item,
  itemIndex,
  itemDepth,
  traverseDocs,
}: {
  root: string
  itemIndex: number
  itemDepth: number
  location: string
  item: [string, FolderItem[]]
  traverseDocs: TraverseDocs
}): DenormalizedCategoryData => {
  const [dirName, dirItems] = item

  const categoryPath = path.join(location, dirName)

  const config = getCategoryConfig(categoryPath, dirName, itemIndex)

  const route = categoryPath.slice(root.length)

  const items = dirItems
    .filter(item => Array.isArray(item) || item.endsWith('.md'))
    .map((item, itemIndex) =>
      traverseDocs({
        root,
        location: categoryPath,
        item,
        itemIndex,
        itemDepth: itemDepth + 1,
      })
    )
    .sort((a, b) => a.data.index - b.data.index)

  const hasCategoryPage =
    items.every(item => item.type === 'category') ||
    !items.some(
      item => item.type === 'document' && item.data.fileName === 'index.md'
    )

  return {
    type: 'category',
    data: { depth: itemDepth, items, hasCategoryPage, route, ...config },
  }
}
