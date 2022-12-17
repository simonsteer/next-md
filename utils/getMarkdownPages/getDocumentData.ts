import fs from 'fs'
import { omit } from 'lodash'
import { marked } from 'marked'
import path from 'path'
import { MarkdownDocument } from 'types'
import { MD_FILE_EXTENSION } from 'vars'
import { jsonfm } from 'utils'

export const getDocumentData = ({
  location,
  item,
  itemIndex,
  root,
}: {
  root: string
  location: string
  item: string
  itemIndex: number
}): MarkdownDocument => {
  const itemPath = path.join(location, item)
  const { body, attributes } = jsonfm(fs.readFileSync(itemPath).toString())

  const name = item.slice(0, item.length - MD_FILE_EXTENSION.length)

  let route = itemPath.slice(
    root.length,
    itemPath.length - MD_FILE_EXTENSION.length
  )
  if (name === 'index') {
    route = route.slice(0, route.length - '/index'.length) || '/'
  }

  let index = itemIndex
  if (typeof attributes.index === 'number') {
    index = attributes.index
  }

  let title: null | string = null
  if (typeof attributes.title === 'string') {
    title = attributes.title
  } else {
    title = marked.lexer(body).reduce((acc, token) => {
      if (acc !== null) return acc
      if (token.type === 'heading') {
        return token.tokens.reduce((acc, t) => {
          if ('text' in t) return acc + t.text
          return acc
        }, '')
      }
      return acc
    }, title!)
  }

  if (!title) title = name

  return {
    type: 'document',
    data: {
      fileName: item,
      body,
      index,
      route,
      title,
      metadata: omit(attributes, ['index', 'title']),
    },
  }
}
