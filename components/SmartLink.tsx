import Link from 'next/link'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

export type SmartLinkProps = ComponentPropsWithoutRef<'a'>

export const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(
  ({ href, children, ...rest }, ref) => {
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
