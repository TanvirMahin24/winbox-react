import React from 'react'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import styles from './Usage.module.css'

SyntaxHighlighter.registerLanguage('bash', bash)
SyntaxHighlighter.registerLanguage('javascript', javascript)
const Usage = () => {
  return (
    <div className='text-light pt-4'>
      <span className='d-block title title__colored text-center pt-5'>
        USAGE
      </span>
      <span className='d-block   text-center pt-3'>
        Install the Package using npm
      </span>
      <div className={`mx-auto ${styles.code}`}>
        <SyntaxHighlighter language='bash' style={materialDark}>
          {'npm i winbox-react'}
        </SyntaxHighlighter>
      </div>
      <span className='d-block   text-center pt-3'>
        Import the CSS in the App.js file
      </span>
      <div className={`mx-auto ${styles.code2}`}>
        <SyntaxHighlighter language='javascript' style={materialDark}>
          {"import 'winbox-react/dist/index.css'"}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Usage
