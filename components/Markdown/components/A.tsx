import Link from 'next/link'
import { ComponentPropsWithoutRef, forwardRef } from 'react'
import { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react'

export type AProps = ComponentPropsWithoutRef<'a'> & ReactMarkdownProps

export const A = forwardRef<HTMLAnchorElement, AProps>(
  (
    { href, children, node, sourcePosition, index, siblingCount, ...rest },
    ref
  ) => {
    let _href = href || ''
    if (_href.startsWith('/docs')) _href = _href.slice('/docs'.length)

    if (_href.startsWith('/')) {
      return (
        <Link href={_href} ref={ref} {...rest}>
          {children}
        </Link>
      )
    }

    return (
      <a
        ref={ref}
        href={_href}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )
  }
)
