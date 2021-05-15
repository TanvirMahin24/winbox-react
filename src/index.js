import React from 'react'
import ReactDOMServer from 'react-dom/server'
import WinBox from 'winbox/src/js/winbox'
import 'winbox/dist/css/winbox.min.css'
import 'winbox/dist/css/themes/modern.min.css'

const WinboxReact = ({
  title,
  border,
  background,
  className,
  x,
  y,
  width,
  height,
  top,
  right,
  bottom,
  left,
  modal,
  children,
  modern
}) => {
  const wb = new WinBox(title, {
    border,
    background,
    x,
    y,
    width,
    height,
    top,
    right,
    bottom,
    left,
    modal,
    html: `${ReactDOMServer.renderToStaticMarkup(children)}`,
    class: `${modern ? 'modern' : className ? `${className}` : ''}`
  })

  return <div className={className ? `${$className}` : ''}></div>
}

WinboxReact.defaultProps = {
  title: 'Winbox React Title',
  border: '0',
  background: '#28292d',
  x: 0,
  y: 0,
  modal: false
}

export default WinboxReact
