import { icon, center } from '../style.jsx'

export const statusWrapper = {
  alignItems: 'stretch',
  alignContent: 'center',
  marginLeft: 'auto',
  justifyContent: 'space-around',
  display: 'flex',
  width: '23%'
}

export const statusItem = {
  display: 'flex',
  padding: '0 .5rem',
  justifyContent: 'center'
}

export const statusBattery = {
  ...center,
  padding: '0 .5rem',
  borderBottom: '1px solid #dda6bb'
}

export const statusWifi = {
  ...center,
  padding: '0 .5rem',
  borderBottom: '1px solid #cfe6e2'
}

export const statusDateTime = {
  ...center,
  padding: '0 .5rem',
  borderBottom: '1px solid #66b8cc',
  flexDirection: 'column',
  fontSize: '.6rem'
}

export const batteryIcon = {
  ...icon,
  fontSize: '.8rem',
  paddingRight: '.5rem'
}

export const wifiIcon = {
  ...icon,
  fontSize: '10px',
  lineHeight: '2',
  paddingRight: '.5rem'
}

export const statusIsLoading = {
  color: '#16C020'
}
