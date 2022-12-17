import { forwardRef } from 'react'
import { LiProps } from 'react-markdown/lib/ast-to-react'

export const LI = forwardRef<HTMLLIElement, LiProps>(
  (
    {
      children,
      node,
      sourcePosition,
      index,
      siblingCount,
      checked,
      ordered,
      ...rest
    },
    ref
  ) => (
    <li ref={ref} {...rest}>
      {children}
    </li>
  )
)
