import React from 'react'
import Blog from './blogs/Blog'
import Sidebar from './blogs/Sidebar'

export default function Blogs() {
  return (
    <div>
      <div className='xl:container mx-auto px-6 lg:px-16'>
        <div className='grid grid-cols-12  gap-12'>
            <div className='md:col-span-8 col-span-12 '>
              <Blog/>
            </div>
            
            <div className='md:col-span-4 col-span-12 border-primary'>
                <Sidebar/>
            </div>
        </div>
      </div>
    </div>
  )
}
