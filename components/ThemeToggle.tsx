import { ThemeType, useTheme } from 'hooks'
import {
  ComponentPropsWithoutRef,
  forwardRef,
  MouseEventHandler,
  ReactNode,
  useCallback,
} from 'react'

type ThemeToggleProps = Omit<ComponentPropsWithoutRef<'button'>, 'children'> & {
  children?: ReactNode | ((theme: ThemeType) => ReactNode)
}

export const ThemeToggle = forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ children, onClick, ...rest }, ref) => {
    const [theme, setTheme] = useTheme()

    const handleClick: MouseEventHandler<HTMLButtonElement> = useCallback(
      e => {
        onClick?.(e)
        setTheme(theme === 'dark' ? 'light' : 'dark')
      },
      [onClick, theme, setTheme]
    )

    return (
      <button onClick={handleClick} ref={ref} {...rest}>
        {typeof children === 'function' ? children(theme) : children}
      </button>
    )
  }
)
