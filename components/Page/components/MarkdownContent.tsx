import { MarkdownDocument } from 'types'
import { Markdown } from 'components'

export function MarkdownContent(page: MarkdownDocument) {
  return <Markdown {...page.data} />
}
