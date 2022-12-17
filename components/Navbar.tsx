import { ThemeToggle } from './ThemeToggle'

export function Navbar() {
  return (
    <nav>
      <ThemeToggle>
        {theme =>
          theme === 'dark' ? 'switch to light mode' : 'switch to dark mode'
        }
      </ThemeToggle>
    </nav>
  )
}
