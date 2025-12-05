import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type Theme = 'light' | 'dark'
export type UserTheme = Theme | 'auto'

export type ThemeState = {
  theme: Theme
  userTheme: UserTheme
  setUserTheme: (theme: UserTheme) => void
  toggleUserTheme: () => void
}

function parseUserTheme (userTheme: UserTheme): Theme {
  if (userTheme === 'auto') {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    return isDarkMode ? 'dark' : 'light'
  }
  return userTheme
}

export const useThemeStore = create<ThemeState>()(
  persist(
    set => {
      // here we should listen to system color mode changes when userMode is 'auto'
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        set(state => {
          if (state.userTheme === 'auto') {
            return { theme: e.matches ? 'dark' : 'light' }
          }
          return {}
        })
      })

      return {
        userTheme: 'auto',
        setUserTheme: (theme: UserTheme) => {
          set(() => ({ userTheme: theme, theme: parseUserTheme(theme) }))
        },
        theme: parseUserTheme('auto'),
        toggleUserTheme: () => set(state => {
          const modes = ['light', 'dark', 'auto'] as UserTheme[]
          const currentIndex = modes.indexOf(state.userTheme)
          const nextIndex = (currentIndex + 1) % modes.length
          const nextUserTheme = modes[nextIndex]
          return {
            userTheme: nextUserTheme,
            theme: parseUserTheme(nextUserTheme),
          }
        }),
      }
    },
    {
      name: 'theme',
    },
  ),
)
