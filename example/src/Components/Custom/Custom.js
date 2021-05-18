import React from 'react'
import styles from './Custom.module.css'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

SyntaxHighlighter.registerLanguage('css', css)

const Custom = () => {
  const codeRender = `
.winbox {
    background: linear-gradient(90deg, #ff00f0, #0050ff);
    border-radius: 12px 12px 0 0;
    box-shadow: none;
}

.winbox.min {
    border-radius: 0;
}

.wb-body {
    /* the width of window border: */
    margin: 4px;
    color: #fff;
    background: #131820;
}

.wb-title {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 600;
}`
  const codeRender2 = `
.wb-icon * {
    opacity: 0.65;
}

.wb-icon *:hover {
    opacity: 1;
}

.wb-min {
    background-image: url(src/img/min.svg);
    background-size: 15px center;
}

.wb-max {
    background-image: url(src/img/max.svg);
}

.wb-close {
    background-image: url(src/img/close.svg);
}

.wb-full {
    display: none;
}`
  const codeRender3 = `
.wb-body::-webkit-scrollbar {
    width: 12px;
}
.wb-body::-webkit-scrollbar-track {
    background: transparent;
}
.wb-body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #263040;
}
.wb-body::-webkit-scrollbar-thumb:window-inactive {
    background: #181f2a;
}
.wb-body::-webkit-scrollbar-corner {
    background: transparent;
}`
  return (
    <div className='text-light pt-4'>
      <span className='d-block title title__colored text-center pt-5'>
        Custom Global Styles
      </span>
      <span className='d-block   text-center pt-3'>
        You can change the global styles of the Winbox by targeting these
        classes
      </span>
      <div className={`mx-auto ${styles.code}`}>
        <SyntaxHighlighter language='css' style={materialDark}>
          {codeRender}
        </SyntaxHighlighter>
      </div>
      <span className='d-block title title__colored text-center pt-5'>
        Custom Icons
      </span>
      <span className='d-block   text-center pt-3'>
        Change the icons using these css classes
      </span>
      <div className={`mx-auto ${styles.code2}`}>
        <SyntaxHighlighter language='css' style={materialDark}>
          {codeRender2}
        </SyntaxHighlighter>
      </div>
      <span className='d-block title title__colored text-center pt-5'>
        Custom Scrollbars
      </span>
      <span className='d-block   text-center pt-3'>
        Modify the scrollbar using these css classes
      </span>
      <div className={`mx-auto ${styles.code2}`}>
        <SyntaxHighlighter language='css' style={materialDark}>
          {codeRender3}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

export default Custom
