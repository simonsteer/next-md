import { createElement } from 'react'
import { forwardRef } from 'react'
import { HeadingProps } from 'react-markdown/lib/ast-to-react'

export const H = forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { children, level, node, sourcePosition, index, siblingCount, ...rest },
    ref
  ) => {
    const el = `h${level}`
    return createElement(el, { ref, children, ...rest })
  }
)
