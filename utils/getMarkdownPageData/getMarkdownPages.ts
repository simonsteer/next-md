import path from 'path'
import { FolderItem } from 'types'
import { listFolderItems } from 'utils'
import { traverseDocs } from './traverseDocs'

export const getMarkdownPages = () => {
  const root = path.resolve(process.cwd(), 'docs')
  return listFolderItems(root)
    .filter(filterFolderItem)
    .map((item, itemIndex) =>
      traverseDocs({ root, location: root, item, itemIndex, itemDepth: 0 })
    )
    .sort((a, b) => a.data.index - b.data.index)
}

const filterFolderItem = (item: FolderItem) => {
  if (Array.isArray(item)) {
    let [, [...items]] = item
    items = items.filter(filterFolderItem)
    return items.length > 0
  }
  return item.endsWith('.md')
}
