import { forwardRef } from 'react'
import { TableDataCellProps } from 'react-markdown/lib/ast-to-react'

export const TD = forwardRef<HTMLTableDataCellElement, TableDataCellProps>(
  (
    { children, node, sourcePosition, index, siblingCount, isHeader, ...rest },
    ref
  ) => (
    <td ref={ref} {...rest}>
      {children}
    </td>
  )
)
