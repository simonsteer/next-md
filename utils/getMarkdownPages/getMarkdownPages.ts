import path from 'path'
import { listFolderItems } from 'utils'
import { traverseDocs } from './traverseDocs'

export const getMarkdownPages = () => {
  const root = path.resolve(process.cwd(), 'docs')
  const pages = listFolderItems(root)
    .map((item, itemIndex) =>
      traverseDocs({ root, location: root, item, itemIndex })
    )
    .sort((a, b) => a.data.index - b.data.index)

  return pages
}
