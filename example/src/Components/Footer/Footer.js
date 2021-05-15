import React from 'react'
import { SocialIcons } from '../SocialIcons'

const Footer = () => {
  return (
    <div className='py-4 text-center'>
      <div className=''>
        <SocialIcons />
      </div>
      <div className='text-light lead'>&copy;2021 by Tanvir Mahin</div>
    </div>
  )
}

export default Footer
