import React from 'react'
import Hero from './merchantcash/Hero'
import Whychoose from './merchantcash/Whychoose'
import Processwork from './merchantcash/Processwork'
import Benifites from './merchantcash/Benifites'
import Faq from '../common/Faq'
import Rightsforbusiness from './merchantcash/Rightsforbusiness'
import { MCA } from '../contstant/constant'

export default function MerchantcashAdvanc() {
  return (
    <div className=''>
 <Hero/>
 <Whychoose/>
 <Processwork/>
 <Benifites/>
 <Rightsforbusiness/>
 <Faq data={MCA.faq}/>
 
    </div>
  )
}
