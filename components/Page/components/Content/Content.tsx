import { usePageContent } from 'hooks'
import { CategoryContent, MarkdownContent } from './components'

export function Content() {
  const content = usePageContent()

  switch (content.type) {
    case 'document':
      return <MarkdownContent {...content} />
    case 'category':
      return <CategoryContent {...content} />
    default:
      return null
  }
}
