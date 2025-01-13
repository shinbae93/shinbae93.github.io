import { ReactNode, useEffect, useState } from 'react'

import { THEME } from '@/constants'

import { ThemeContext } from './ThemeContext'

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || THEME.LIGHT)

  useEffect(() => {
    if (theme === THEME.DARK) {
      document.documentElement.classList.add(THEME.DARK)
    } else {
      document.documentElement.classList.remove(THEME.DARK)
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
}
