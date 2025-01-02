import React from 'react'
import Blog from './blogs/Blog'
import Sidebar from './blogs/Sidebar'

export default function Blogs() {
  return (
    <>
      <div className='xl:container  sm:px-6 lg:px-16 mx-auto xl:mb-[20rem] lg:mb-[15rem] ] mb-[20rem]  mt-5'>   
        <div className='grid grid-cols-12  md:gap-12 gap-4'>
            <div className='lg:col-span-8 col-span-12 '>
              <Blog/>
            </div>
            
            <div className='md:col-span-4 col-span-12 border-primary'>
                <Sidebar/>
            </div>
        </div>
      </div>
    </>
  )
}
