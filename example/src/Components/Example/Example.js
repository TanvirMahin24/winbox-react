import React, { useState } from 'react'
import WinboxReact from 'winbox-react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './Example.module.css'

SyntaxHighlighter.registerLanguage('jsx', jsx)
const Example = () => {
  const [show, setShow] = useState(false)
  const clickHandeler = () => {
    setShow(!show)
  }
  const codeRender = `<WinboxReact>
  <h4>
    Lorem ipsum dolor sit amet
  </h4>
</WinboxReact>`
  return (
    <div className='text-light pt-4'>
      {show && (
        <WinboxReact onClose={clickHandeler}>
          <h4>Lorem ipsum dolor sit amet</h4>
        </WinboxReact>
      )}
      <span className='d-block title title__colored text-center pt-5'>
        Example
      </span>
      <span className='d-block   text-center pt-3'>
        You can import WinboxReact component as default exported component.
      </span>
      <div className={`mx-auto ${styles.code}`}>
        <SyntaxHighlighter language='jsx' style={materialDark}>
          {`import WinboxReact from 'winbox-react'`}
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
          Show Example
        </button>
      </div>
    </div>
  )
}

export default Example
