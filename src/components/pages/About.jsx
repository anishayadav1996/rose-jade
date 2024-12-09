import React from 'react'
import Abouthero from './about/Abouthero'
import Ourstory from './about/Ourstory'
import Mission from './about/Mission'
import Clientsays from './about/Clientsays'
import Faq from './about/Faq'
import Joinourteam from './about/Joinourteam'
export default function About() {
  return (
    <div className=''>
    <Abouthero/>
    <Ourstory/>
    <Mission/>
    <Clientsays/>
    <Joinourteam/>
    <Faq/>
    </div>
  )
}
