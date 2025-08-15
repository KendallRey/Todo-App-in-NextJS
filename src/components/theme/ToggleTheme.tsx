'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export const CustomToggleTheme = () => {
  const { theme, setTheme } = useTheme()

  const isDark = theme == 'dark'

  const handleChangeTheme = () => {
    setTheme(isDark ? "light" : "dark")
  }

  return (
    <button onClick={handleChangeTheme}
      className='flex items-center gap-2 rounded-2xl p-1
                bg-yellow-400 dark:bg-blue-950
                text-white dark:text-neutral-100'>
      { isDark ?  <Moon/> : <Sun/> }
    </button>
  )
}