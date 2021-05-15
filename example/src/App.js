import React from 'react'

import WinboxReact from 'winbox-react'
import 'winbox-react/dist/index.css'

const App = () => {
  const options = {
    // ADDING CUSTOM TITLE
    title: 'Custom Title',

    //ADDING BORDER example:  25px, 1rem, 10%, 3em. If any number is given it will be count as pixels
    border: '4',

    //ADDING BACKGROUND COLOR any valid css color code can be used. You also can use gradients.
    background:
      'linear-gradient(90deg, rgba(49,36,239,1) 0%, rgba(67,0,168,1) 100%)',

    //CUSTOM className
    className: '',

    //CUSTOM POSITION any valid
    x: 'center',
    y: 'center',

    //CUSTOM SIZE
    width: '20%',
    height: '50%',

    //LIMIT VIEWPORT
    top: 50,
    right: 50,
    bottom: 100,
    left: 50,

    //IS MODAL OR WINDOW (default is false)
    modal: false,

    //EMBED A WEBSITE using the url prop ()
    url: '',

    //USE THE MODERN THEME OF WINBOX
    modern: false
  }
  return (
    <WinboxReact {...options}>
      <h4>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        inventore ut fugit iusto ex ad nihil, fuga ipsum tenetur itaque?
      </h4>
    </WinboxReact>
  )
}

export default App
