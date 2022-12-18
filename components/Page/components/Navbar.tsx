import clsx from 'clsx'
import { ReactNode } from 'react'
import { ThemeToggle } from 'components'

export function Navbar() {
  return (
    <nav
      className={clsx(
        'h-14 px-5 flex items-center justify-between',
        'dark:bg-neutral-800 bg-neutral-100 dark:text-neutral-100 text-neutral-800',
        'border-b dark:border-neutral-700 border-neutral-200'
      )}
    >
      <span className="text-2xl font-bold ">Documentation</span>
      <div className="flex items-center gap-x-5">
        <NavbarLink href="https://www.github.com">github</NavbarLink>
        <NavbarLink href="https://www.twitter.com">twitter</NavbarLink>
        <NavbarLink href="https://www.discord.com">discord</NavbarLink>
        <NavbarLink href="https://www.twitter.com">support</NavbarLink>
        <ThemeToggle>{theme => (theme === 'dark' ? '🌝' : '🌞')}</ThemeToggle>
      </div>
    </nav>
  )
}

const NavbarLink = ({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) => (
  <a
    className="hover:underline"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
)
