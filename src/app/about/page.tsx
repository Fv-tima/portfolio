import React from 'react'
import About from '../components/About'
import Footer from '../components/Footer'

export default function page() {
  return (
    <div>
      <About/>
      <Footer children="02"/>
    </div>
  )
}
