import { MarkdownData } from 'types'
import remarkGfm from 'remark-gfm'
import ReactMarkdown from 'react-markdown'
import { SmartLink } from 'components/SmartLink'
import { Pre, Heading } from './components'

export function Markdown(page: MarkdownData) {
  return (
    <div className="markdown">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({ href, children }) => (
            <SmartLink href={href}>{children}</SmartLink>
          ),
          pre: Pre,
          h1: Heading,
          h2: Heading,
          h3: Heading,
          h4: Heading,
          h5: Heading,
          h6: Heading,
        }}
      >
        {page.data.body}
      </ReactMarkdown>
    </div>
  )
}
