import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'

export type PProps = ComponentPropsWithoutRef<'p'> & ReactMarkdownProps

export const P = forwardRef<HTMLParagraphElement, PProps>(
  ({ children, node, sourcePosition, index, siblingCount, ...rest }, ref) => (
    <p ref={ref} {...rest}>
      {children}
    </p>
  )
)
