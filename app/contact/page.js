import React from 'react'

function page() {
  return (
    <div className='bg-black fixed inset-0 h-screen flex items-center px-16 cursor-auto'>
        <div className='text-white font-mono'>
            <h1 className='text-[11rem]'>Hello.</h1>
            <p>Email: sharma.varun1398@gmail.com</p>
            <p className='flex gap-4 cursor-pointer mt-2'>On the web: 
            <a href='https://www.linkedin.com/in/varunsharma1398/' target="_blank" className='border-b-2'>LinkedIn</a>
            <a href='https://www.instagram.com/varunsharmaaa_/' target="_blank" className='border-b-2'>Instagram</a>
            <a href='https://www.naukri.com/mnjuser/profile' target="_blank" className='border-b-2'>Naukri</a>
            <a href='https://github.com/varun1398' target="_blank" className='border-b-2'>Github</a>
            </p>
        </div>
    </div>
  )
}

export default page