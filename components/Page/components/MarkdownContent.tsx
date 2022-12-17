import { MarkdownContentData } from 'types'
import { Markdown } from 'components'

export function MarkdownContent(page: MarkdownContentData) {
  return (
    <Markdown
      className="dark:text-neutral-100 text-neutral-800"
      {...page.data}
    />
  )
}
