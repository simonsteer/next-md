import { forwardRef } from 'react'
import { UnorderedListProps } from 'react-markdown/lib/ast-to-react'

export const UL = forwardRef<HTMLUListElement, UnorderedListProps>(
  (
    {
      children,
      node,
      sourcePosition,
      index,
      siblingCount,
      depth,
      ordered,
      ...rest
    },
    ref
  ) => (
    <ul ref={ref} {...rest}>
      {children}
    </ul>
  )
)
