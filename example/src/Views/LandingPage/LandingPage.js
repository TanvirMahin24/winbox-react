import React from 'react'
import { All } from '../../Components/All'
import { Example } from '../../Components/Example'
import { Footer } from '../../Components/Footer'
import { Hero } from '../../Components/Hero'
import { Usage } from '../../Components/Usage'

const LandingPage = () => {
  return (
    <>
      <Hero />
      <Usage />
      <Example />
      <All />
      <Footer />
    </>
  )
}

export default LandingPage
