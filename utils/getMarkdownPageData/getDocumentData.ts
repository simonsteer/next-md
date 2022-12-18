import fs from 'fs'
import path from 'path'
import { DenormalizedMarkdownPageData } from 'types'
import { MD_FILE_EXTENSION } from 'vars'
import { jsonfm } from 'utils'
import { getDocumentConfig } from './getDocumentConfig'

export const getDocumentData = ({
  location,
  item,
  itemIndex,
  itemDepth,
  root,
}: {
  root: string
  location: string
  item: string
  itemIndex: number
  itemDepth: number
}): DenormalizedMarkdownPageData => {
  const itemPath = path.join(location, item)

  const name = item.slice(0, item.length - MD_FILE_EXTENSION.length)

  let route = itemPath.slice(
    root.length,
    itemPath.length - MD_FILE_EXTENSION.length
  )
  if (name === 'index') {
    route = route.slice(0, route.length - '/index'.length) || '/'
  }

  const { body, attributes } = jsonfm(fs.readFileSync(itemPath).toString())
  const config = getDocumentConfig(body, attributes, name, itemIndex)

  return {
    type: 'document',
    data: { depth: itemDepth, fileName: item, body, route, ...config },
  }
}
