import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

export type ThemeType = 'dark' | 'light'

const ThemeContext = createContext<
  [ThemeType, Dispatch<SetStateAction<ThemeType>>]
>(['dark', () => {}])

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('dark')

  useEffect(() => {
    const html = document.getElementsByTagName('html').item(0)
    html?.setAttribute('data-theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
