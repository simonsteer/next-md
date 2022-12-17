import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'

export const Table = forwardRef<
  HTMLTableElement,
  ComponentPropsWithoutRef<'table'> & ReactMarkdownProps
>(({ children, node, sourcePosition, index, siblingCount, ...rest }, ref) => (
  <table ref={ref} {...rest}>
    {children}
  </table>
))
