import { forwardRef } from 'react'
import { TableRowProps } from 'react-markdown/lib/ast-to-react'

export const TR = forwardRef<HTMLTableRowElement, TableRowProps>(
  (
    { children, node, sourcePosition, index, siblingCount, isHeader, ...rest },
    ref
  ) => (
    <tr ref={ref} {...rest}>
      {children}
    </tr>
  )
)
