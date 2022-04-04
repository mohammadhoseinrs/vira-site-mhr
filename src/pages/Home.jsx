import React from 'react'
import Customer from '../components/customer/Customer'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/navbar/Navbar'
import Showcase from '../components/showcase/Showcase'
import Sliderimage from '../components/Sliderimage'
import Worksample from '../components/WorkSample/Worksample'

export default function Home() {
  return (
      <>
    <Navbar />
    <Showcase />
    <Worksample />
    <Customer />
    <Footer />
    </>
  )
}
