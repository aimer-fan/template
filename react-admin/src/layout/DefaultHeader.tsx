import { useAuth } from '@/contexts/AuthContext'
import { useThemeStore } from '@/store/theme'
import { Button } from 'antd'

export default function DefaultHeader () {
  const { onLogout } = useAuth()
  const { userTheme, toggleUserTheme } = useThemeStore()

  function ToggleThemeButton () {
    const iconMap: Record<typeof userTheme, string> = {
      light: 'i-material-symbols:light-mode c-yellow-500',
      dark: 'i-material-symbols:dark-mode',
      auto: 'i-material-symbols:hdr-auto-outline',
    }
    return (
      <Button
        type="text"
        className='text-xl'
        onClick={ toggleUserTheme }
        icon={
          <div className={ iconMap[userTheme] }></div>
        }>
      </Button>
    )
  }

  return (
    <div className="px-2 w-full flex justify-between items-center">
      <div>Header</div>
      <div className="flex items-center">
        <ToggleThemeButton />
        <Button type="text" onClick={ onLogout }>Logout</Button>
      </div>
    </div>
  )
}
