import { usePageContent } from 'hooks'
import { Category, Markdown } from './components'

export function Content() {
  const content = usePageContent()

  switch (content.type) {
    case 'document':
      return <Markdown {...content} />
    case 'category':
      return <Category {...content} />
    default:
      return null
  }
}
