import { omit } from 'lodash'
import { marked } from 'marked'
import { ContentConfig, JSONObject } from 'types'

export const getDocumentConfig = (
  body: string,
  attributes: JSONObject,
  name: string,
  itemIndex: number
): ContentConfig => {
  const config: ContentConfig = {
    index: itemIndex,
    description: null,
    title: name,
    custom: omit(attributes, ['index', 'title', 'description']),
  }

  if (typeof attributes.index === 'number') {
    config.index = attributes.index
  }
  if (typeof attributes.description === 'string') {
    config.description = attributes.description
  }
  if (typeof attributes.title === 'string') {
    config.title = attributes.title
  } else {
    const flattenedText = marked
      .lexer(body)
      .reduce((acc, token) => {
        if (acc !== null) return acc
        if (token.type === 'heading') {
          return token.tokens.reduce((acc, t) => {
            if ('text' in t) return acc + t.text
            return acc
          }, '')
        }
        return acc
      }, null as string | null)
      ?.trim()

    if (!!flattenedText) config.title = flattenedText
  }

  return config
}
