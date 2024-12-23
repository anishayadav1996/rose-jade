import React from 'react'
import Hero from './equipmentfinancing/Hero'
import Whychoose from './equipmentfinancing/Whychoose'
import Benefits from './equipmentfinancing/Benifits'
import Features from './equipmentfinancing/Features'
import Faq from '../common/Faq'
import ApplicationProcess from './equipmentfinancing/ApplicationProcess'
import { EQF } from '../contstant/constant.js'

export default function EquipmentFinancing() {
  return (
    <div className=''>
      <Hero/>
      <Whychoose/>
      <ApplicationProcess/>
      <Benefits/>
      <Features/>
      <Faq data={EQF.faq}/>
    </div>
  )
}
