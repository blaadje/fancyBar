import {
  worskpaceWrapper,
  workspaceCurrentIcon,
  workspaceIcon,
  workspaceDivider,
  workspaceInfos,
  workspaceWindowIcon,
  InfosAppName
} from './style.jsx'

const defaultIcon = ''
const iconsList = ['', '', '', '']

const getWorkspaces = (workspaceAmount, active) => {
  return [...Array(workspaceAmount)].map((item, index) => {
    const currentIcon = iconsList[index] ? iconsList[index] : defaultIcon
    const realIdx = index + 1

    if (realIdx === active) {
      return <div style={workspaceCurrentIcon}>{currentIcon}</div>
    }
    return <div style={workspaceIcon}>{currentIcon}</div>
  })
}

const render = (props) => {
  const values = props.output.split('@')
  const mode = values[0].replace(/^\s+|\s+$/g, '')
  const active = parseInt(values[2])
  const total = parseInt(values[1])
  const activeWindow = values[3] ? values[3].split(',') : '?'
  const appName = activeWindow[0]
    
  return (
    <div style={worskpaceWrapper}>
      <div style={{ display: 'flex' }}>{getWorkspaces(total, active)}</div>
      <div style={workspaceDivider} />
      <div style={workspaceInfos}>
        <div>{`[${mode}]`}</div>
        <div style={workspaceWindowIcon}></div>
        <div style={InfosAppName}>{appName}</div>
      </div>
    </div>
  )
}

export default render

// # $(".screen1").on 'click', => @run "osascript -e 'tell application \"System Events\" to key code 18 using control down'"
// # $(".screen2").on 'click', => @run "osascript -e 'tell application \"System Events\" to key code 19 using control down'"
// # $(".screen3").on 'click', => @run "osascript -e 'tell application \"System Events\" to key code 20 using control down'"
// # $(".screen4").on 'click', => @run "osascript -e 'tell application \"System Events\" to key code 21 using control down'"

