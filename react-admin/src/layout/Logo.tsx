import { theme } from 'antd'

type LogoProps = {
  collapsed: boolean
}

export default function Logo (props: LogoProps) {
  const { token } = theme.useToken()

  const logoStyle: React.CSSProperties = {
    width: props.collapsed ? 48 : 120,
    fontSize: 24,
    color: token.colorWhite,
    fontWeight: token.fontWeightStrong,
    transition: 'all .3s ease-in-out',
    cursor: 'pointer',
    userSelect: 'none',
    overflow: 'hidden',
    margin: 0,
    letterSpacing: '0.1em',
    textAlign: 'center',
  }
  return (
    <div className="flex justify-center items-center h-16">
      <h1 style={ logoStyle }>LOGO</h1>
    </div>
  )
}
