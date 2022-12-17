import { forwardRef } from 'react'
import { OrderedListProps } from 'react-markdown/lib/ast-to-react'

export const OL = forwardRef<HTMLOListElement, OrderedListProps>(
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
    <ol ref={ref} {...rest}>
      {children}
    </ol>
  )
)
