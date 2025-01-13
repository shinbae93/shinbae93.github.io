import { MoonOutlined, SunFilled } from '@ant-design/icons'

import { THEME } from '@/constants'
import { useTheme } from '@/hooks/useTheme'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT)} className="p-2">
      {theme === THEME.LIGHT ? <SunFilled className="text-2xl" /> : <MoonOutlined className="text-2xl" />}
    </button>
  )
}

export default ThemeToggle
