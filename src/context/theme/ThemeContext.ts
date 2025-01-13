import { createContext } from 'react'

import { THEME } from '@/constants'

interface ThemeContextType {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: THEME.LIGHT,
  setTheme: () => {
    throw new Error('setTheme must be used within a ThemeProvider')
  },
})
