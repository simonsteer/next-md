import { MarkdownDocument } from 'types'
import { Markdown } from 'components'

export function MarkdownContent(page: MarkdownDocument) {
  return (
    <Markdown
      {...page.data}
      className="flex-1 dark:bg-stone-800 bg-stone-50 dark:text-stone-200 text-stone-800"
    />
  )
}
