import React from 'react'
import Hero from './equipmentfinancing/Hero'
import Whychoose from './equipmentfinancing/Whychoose'
import Benefits from './equipmentfinancing/Benifits'
import Processwork from './merchantcash/Processwork'
import Features from './equipmentfinancing/Features'
import Faq from './about/Faq'

export default function EquipmentFinancing() {
  return (
    <div className=''>
      <Hero/>
      <Whychoose/>
      <Processwork/>
      <Benefits/>
      <Features/>
      <Faq/>
    </div>
  )
}
