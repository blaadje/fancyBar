import { icon } from '../style.jsx'

export const worskpaceWrapper = {
  width: '50%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  display: 'flex'
}

export const workspaceIcon = {
  ...icon,
  fontWeight: '300',
  color: 'white',
  padding: '1rem'
}

export const workspaceCurrentIcon = {
  ...workspaceIcon,
  background: 'rgba(255, 255, 255, .1)'
}

export const workspaceDivider = {
  height: '80%',
  background: 'white',
  width: '1px',
  margin: '0 1rem'
}

export const workspaceInfos = {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  flexWrap: 'no-wrap'
}

export const workspaceWindowIcon = {
  ...icon,
  margin: '0 1rem'
}

export const InfosAppName = {
  overflow: 'hidden',
  width: '390px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis'
}