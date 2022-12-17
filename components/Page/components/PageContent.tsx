import { usePageData } from 'hooks'
import { CategoryContent } from './CategoryContent'
import { MarkdownContent } from './MarkdownContent'

export function PageContent() {
  const page = usePageData()

  switch (page.content.type) {
    case 'document':
      return <MarkdownContent {...page.content} />
    case 'category':
      return <CategoryContent {...page.content} />
    default:
      return null
  }
}
