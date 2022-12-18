import Link from 'next/link'
import { ComponentPropsWithoutRef, forwardRef, useRef } from 'react'

export type SmartLinkProps = ComponentPropsWithoutRef<'a'> & {
  prefetch?: boolean | 'hover'
}

export const SmartLink = forwardRef<HTMLAnchorElement, SmartLinkProps>(
  ({ href, children, prefetch = false, onClick, ...rest }, ref) => {
    const innerRef = useRef<HTMLAnchorElement>(null)

    let _href = href || ''
    if (_href.startsWith('/docs')) _href = _href.slice('/docs'.length)

    if (_href.startsWith('/')) {
      if (prefetch !== false) {
        return (
          <Link
            href={_href}
            ref={ref}
            prefetch={prefetch !== 'hover'}
            onClick={onClick}
            {...rest}
          >
            {children}
          </Link>
        )
      }

      return (
        <>
          <a
            ref={ref}
            href={_href}
            onClick={e => {
              e.preventDefault()
              onClick?.(e)
              innerRef.current?.click()
            }}
            {...rest}
          >
            {children}
          </a>
          <Link
            href={_href}
            ref={innerRef}
            prefetch={false}
            className="hidden"
          />
        </>
      )
    }

    return (
      <a
        ref={ref}
        href={_href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    )
  }
)
