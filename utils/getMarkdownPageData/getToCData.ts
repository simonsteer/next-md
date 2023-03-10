import { marked } from 'marked'
import slugify from 'slugify'
import { ContentData, ToCItem } from 'types'

export function getToCData(item: ContentData): ToCItem[] {
  if (item.type === 'category') return []

  return marked.lexer(item.data.body).reduce((acc, token) => {
    if (token.type === 'heading') {
      const text = token.tokens
        .reduce((acc, t) => {
          if ('text' in t) return acc + t.text
          return acc
        }, '')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")

      let id = slugify(text, { lower: true, strict: true })
      if (!Number.isNaN(parseInt(id[0]))) id = '_' + id

      acc.push({
        id,
        text,
        level: token.depth,
      })
    }
    return acc
  }, [] as ToCItem[])
}
