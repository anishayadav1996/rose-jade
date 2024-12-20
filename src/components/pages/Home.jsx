import React from 'react'
import Hero from './home/Hero'
import About from './home/About'
import Service from './home/Service'
// import Financial from './home/Financial'
import Clients from './home/Clients'
import Getstarted from './home/Getstarted'
import Whychooseus from './home/Whychooseus'
import Howtoapply from './home/Howtoapply'
import Faq from './about/Faq'
// import Insights from './home/Insights'

export default function Home() {
  return (

    <div className="">
      <Hero />
      <About />
      <Getstarted/>
      <Whychooseus/>
      <Service/>
      <Howtoapply/>
      {/* <Financial/> */}
      <Clients/>
      <Faq/>

      {/* <Insights/> */}
    </div>

  )
}
