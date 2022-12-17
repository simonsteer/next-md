import { forwardRef } from 'react'
import { TableHeaderCellProps } from 'react-markdown/lib/ast-to-react'

export const TH = forwardRef<HTMLTableHeaderCellElement, TableHeaderCellProps>(
  (
    { children, node, sourcePosition, index, siblingCount, isHeader, ...rest },
    ref
  ) => (
    <th ref={ref} {...rest}>
      {children}
    </th>
  )
)
