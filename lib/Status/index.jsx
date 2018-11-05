import { 
  statusWrapper,
  statusItem,
  statusWifi,
  statusIsLoading,
  statusBattery,
  statusDateTime,
  batteryIcon,
  wifiIcon
} from './style.jsx'

import batteryLevels from './batteryLevels.js'

const getbatteryStatus = ({ amount, state }) => {
  amount  = parseInt(amount)
  const isLoading = state === 'AC'

  const style = {
    ...batteryIcon,
    ...isLoading ? statusIsLoading : null 
  }

  for (let i = 0; i <= batteryLevels.length - 1; i++) {
    const item = batteryLevels[i]

    if (amount <= item.levelMax) {
      return (
        <div style={statusBattery}>
          <span style={style}>{item.icon}</span>
          <span>{amount}%</span>
        </div>
      )
    }
  }
}

const getWifiStatus = ({ netStatus, netName }) => {
  const netIcons = {
    'Wi-Fi': '',
    'USB 10/100/1000 LAN': '',
    'Apple USB Ethernet Adapter': '',
    none: ''
  }
  netName = netName === 'none' ? 'Not connected' : netName

  return (
    <div style={statusWifi}>
      <span style={wifiIcon} class='wifi'>{netIcons[netStatus]}</span>
      <span class='white'>{netName}</span>
    </div>
  )
}

const getDateTime = ({ time, date }) => {
  return (
    <div style={statusDateTime}>
      <div>{time}</div>
      <div>{date}</div>
    </div>
  )
}

const render = (props) => {
  const values = props.output.split('@')

  const dateTimeInfos = {
    time: values[0].replace(/^\s+|\s+$/g, ''),
    date: values[1]
  }
  const batteryInfos = {
    amount: values[2],
    state: values[3].split(' ')[1],
  }
  const wifiInfos = {
    netStatus: values[4].split(' ')[1],
    netName: values[5]
  }
  

  return (
    <div style={statusWrapper}>
      <div style={statusItem}>{getbatteryStatus(batteryInfos)}</div>
      <div style={statusItem}>{getWifiStatus(wifiInfos)}</div>
      <div style={statusItem}>{getDateTime(dateTimeInfos)}</div>
    </div>
  )
}

export default render