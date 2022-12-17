import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'

export type CodeProps = ComponentPropsWithoutRef<'code'> & ReactMarkdownProps

export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ children, ...rest }, ref) => (
    <code ref={ref} {...rest}>
      {children}
    </code>
  )
)
