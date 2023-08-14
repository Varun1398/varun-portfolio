'use client'
import React from 'react'
import Links from './Links'

function DropMenu({setDrop}) {
  return (
    <div className='fixed bg-white top=5 left-5 roundex-3xl shadow-2xl shadow-slate-500 z-50' onClick={() => setDrop(false)}>
      <nav className='flex flex-col'>
        <ul className='min-[40vh] rounded-3xl lg:min-[30vh] h-[100%] flex flex-wrap lg-flex-nowrap uppercase text-center text-[1.7rem]'>
            <Links 
            name="Contact"
            path="/contact"
            last
            />
        </ul>
      </nav>
    </div>
  )
}

export default DropMenu
