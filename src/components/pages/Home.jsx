import React from 'react'
import Hero from './home/Hero'
import About from './home/About'
import Service from './home/Service'
import Financial from './home/Financial'
import Clients from './home/Clients'
// import Insights from './home/Insights'

export default function Home() {
  return (

    <div className="">
      <Hero />
      <About />
      <Service/>
      <Financial/>
      <Clients/>
      {/* <Insights/> */}
    </div>

  )
}
