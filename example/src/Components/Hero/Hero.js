import React, { useState } from 'react'
import WinboxReact from 'winbox-react'
import styles from './Hero.module.css'
import img from '../../Assets/image.png'

const Hero = () => {
  const [show, setShow] = useState(false)
  const clickHandeler = () => {
    setShow(!show)
  }

  return (
    <div className='text-center'>
      {show && (
        <WinboxReact
          onClose={clickHandeler}
          background='linear-gradient(90deg, rgba(49,36,239,1) 0%, rgba(67,0,168,1) 100%)'
        />
      )}
      <img src={img} className='img-fluid mt-5' alt='' />
      <span className={`d-block ${styles.name}`}>WinBox React</span>
      <span className={`d-block ${styles.text} `}>
        by{' '}
        <a href='https://tanvirmahin.netlify.app/' className='title__colored'>
          Tanvir Mahin
        </a>
      </span>
      <span className={`d-block ${styles.text}`}>
        by
        <a href='https://tanvirmahin.netlify.app/' className='title__colored'>
          WinBox.js
        </a>
      </span>

      <button onClick={clickHandeler} className='btn btn-custom btn-lg mt-4'>
        Show Example
      </button>
    </div>
  )
}

export default Hero
