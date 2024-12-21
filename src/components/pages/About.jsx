import React from 'react'
import Abouthero from './about/Abouthero'
import Ourstory from './about/Ourstory'
import Mission from './about/Mission'
// import Clientsays from './about/Clientsays'
// import Faq from './about/Faq'
// import Joinourteam from './about/Joinourteam'
import OurVision from './about/OurVision'
import Whatsetsapart from './about/Whatsetsapart'
import Service from './home/Service.jsx'
import OurCommitment from './about/OurCommitment.jsx'
export default function About() {
  return (
    <div className=''>
    <Abouthero/>
    <Mission/>
    <OurVision/>
    <Ourstory/>
    <Whatsetsapart/>
    <Service/>
    <OurCommitment/>
    {/* <Clientsays/> */}
    {/* <Joinourteam/>
    <Faq/> */}
    </div>
  )
}
