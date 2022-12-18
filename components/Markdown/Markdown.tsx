import { ComponentPropsWithoutRef, forwardRef } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { MarkdownPageData } from 'types'
import {
  A,
  Blockquote,
  Code,
  H,
  LI,
  OL,
  P,
  Pre,
  Table,
  TD,
  TH,
  TR,
  UL,
} from './components'

export type MarkdownProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> &
  MarkdownPageData['data']

export const Markdown = forwardRef<HTMLDivElement, MarkdownProps>(
  ({ body, route, index, custom, title, fileName, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            a: A,
            blockquote: Blockquote,
            code: Code,
            h1: H,
            h2: H,
            h3: H,
            h4: H,
            h5: H,
            h6: H,
            li: LI,
            ol: OL,
            p: P,
            pre: Pre,
            table: Table,
            td: TD,
            th: TH,
            tr: TR,
            ul: UL,
          }}
        >
          {body}
        </ReactMarkdown>
      </div>
    )
  }
)
