import Workspaces from './lib/Workspaces/index.jsx'
import Status from './lib/Status/index.jsx'

export const refreshFrequency = 100

const backgroundStyle = {
  position: 'fixed',
  display: 'flex',
  background: 'rgba(35, 33, 70, 0.7)',
  overflow: 'hidden',
  width: '100%',
  color: 'white',
  top: '0px',
  fontFamily: 'geneva',
  fontSize: '.8rem',
  right: '0px',
  left: '0px',
  height: '35px',
  boxShadow: '-5px 5px 5px 0px rgba(0,0,0,0.3)',
}

export const command = "sh fancybar.widget/scripts/screens && sh fancybar.widget/scripts/status.sh"

export const render = (props) => {
  const output = props.output.split('\n')

  return (
    <div style={backgroundStyle}>
      <Workspaces output={output[0]} />
      {/* <Status output={output[1]} /> */}
    </div>
  )
}