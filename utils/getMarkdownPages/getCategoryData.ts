import fs from 'fs'
import { omit } from 'lodash'
import path from 'path'
import {
  CategoryData,
  JSONObject,
  CategoryContentData,
  FolderItem,
  BreadcrumbItem,
} from 'types'
import { TraverseDocs } from './traverseDocs'

export const getCategoryData = ({
  root,
  location,
  item,
  itemIndex,
  traverseDocs,
}: {
  root: string
  itemIndex: number
  location: string
  item: [string, FolderItem[]]
  traverseDocs: TraverseDocs
}): CategoryContentData => {
  const [dirName, dirItems] = item

  let title: CategoryData['title'] = dirName
  let index: CategoryData['index'] = itemIndex
  let description: CategoryData['description'] = null
  let metadata: CategoryData['metadata'] = {}

  const categoryPath = path.join(location, dirName)
  const categoryDataPath = path.join(categoryPath, 'category.json')

  if (fs.existsSync(categoryDataPath)) {
    const categoryData: JSONObject = JSON.parse(
      fs.readFileSync(categoryDataPath).toString()
    )

    if (typeof categoryData.index === 'number') {
      index = categoryData.index
    }
    if (typeof categoryData.title === 'string') {
      title = categoryData.title
    }
    if (typeof categoryData.description === 'string') {
      description = categoryData.description
    }

    metadata = omit(categoryData, ['index', 'title', 'description'])
  }

  const route = categoryPath.slice(root.length)

  const categoryItems = dirItems
    .filter(item => Array.isArray(item) || item.endsWith('.md'))
    .map((item, itemIndex) =>
      traverseDocs({
        root,
        location: categoryPath,
        item,
        itemIndex,
      })
    )
    .sort((a, b) => a.data.index - b.data.index)

  const hasCategoryPage =
    categoryItems.every(item => item.type === 'category') ||
    !categoryItems.some(
      item => item.type === 'document' && item.data.fileName === 'index.md'
    )

  return {
    type: 'category',
    data: {
      items: categoryItems,
      hasCategoryPage,
      index,
      title,
      description,
      metadata,
      route,
    },
  }
}
