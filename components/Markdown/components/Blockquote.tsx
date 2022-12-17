import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'

export type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'> &
  ReactMarkdownProps

export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  ({ children, node, sourcePosition, index, siblingCount, ...rest }, ref) => (
    <blockquote ref={ref} {...rest}>
      {children}
    </blockquote>
  )
)
