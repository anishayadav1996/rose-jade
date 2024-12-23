import React from 'react'
import Hero from './lineofcredit/Hero'
import Whychoose from './lineofcredit/Whychoose'
import Benefits from './lineofcredit/Benefits'
// import Features from './equipmentfinancing/Features'
import Faq from '../common/Faq'
import { LOC } from '../contstant/constant'
import Howdoesabusiness from './lineofcredit/Howdoesabusiness'

export default function Lineofcredit() {
  return (
    <div>
      <Hero/>
      <Whychoose/>
      <Benefits/>
      <Howdoesabusiness/>
      <Faq data={LOC.faq}/>
    </div>
  )
}
