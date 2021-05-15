import React, { useState } from 'react'
import WinboxReact from 'winbox-react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './All.module.css'

SyntaxHighlighter.registerLanguage('jsx', jsx)

const All = () => {
  const [show, setShow] = useState(false)
  const clickHandeler = () => {
    setShow(!show)
  }

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

  const codeConfig = `const config = {
    // ADDING CUSTOM TITLE
    title: 'Custom Title',

    /*ADDING BORDER example:  25px, 1rem, 10%, 3em. 
    If any number is given it will be count as pixels*/
    border: '4',

    /*ADDING BACKGROUND COLOR any valid 
    css color code can be used. You also can use gradients.*/
    background:
      \`linear-gradient(90deg, rgba(49,36,239,1) 
      0%, rgba(67,0,168,1) 100%)\`,

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

    //onClose EVENT
    onClose: myCustomFunction()
  }`

  const codeRender = `<WinboxReact {...options}>
  <h4>Lorem ipsum dolor sit amet</h4>
</WinboxReact>`

  return (
    <div className='text-light pt-4'>
      {show && (
        <WinboxReact onClose={clickHandeler} {...options}>
          <h4>Lorem ipsum dolor sit amet</h4>
        </WinboxReact>
      )}
      <span className='d-block title title__colored text-center pt-5'>
        Example with all available props
      </span>
      <span className='d-block text-center pt-3'>Config object</span>
      <div className={`mx-auto ${styles.code}`}>
        <SyntaxHighlighter language='jsx' style={materialDark}>
          {codeConfig}
        </SyntaxHighlighter>
      </div>
      <span className='d-block   text-center pt-3'>Render the component.</span>
      <div className={`mx-auto ${styles.code2}`}>
        <SyntaxHighlighter language='jsx' style={materialDark}>
          {codeRender}
        </SyntaxHighlighter>
      </div>
      <div className='text-center pb-5'>
        <button onClick={clickHandeler} className='btn btn-custom btn-lg mt-4'>
          Show All
        </button>
      </div>
    </div>
  )
}

export default All
