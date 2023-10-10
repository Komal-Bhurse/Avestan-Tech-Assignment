import React from 'react'

function Footer() {
  return (
    <footer className='bg-sky-900 text-white'>
      <div className='container mx-auto flex flex-wrap items-start justify-between gap-3 xl:px-24 lg:px-10 px-5 pt-4 pb-10'>
     <div className='flex flex-col gap-1'>
        <h3 className='text-2xl font-bold'>Company</h3>
        <span className='text-lg font-semibold'>About Us</span>
        <span className='text-lg font-semibold'>Blog</span>
        <span className='text-lg font-semibold'>Careers</span>
     </div>
     <div className='flex flex-col gap-1'>
        <h3 className='text-2xl font-bold'>Support</h3>
        <span className='text-lg font-semibold'>Help Center</span>
        <span className='text-lg font-semibold'>Safety Center</span>
        <span className='text-lg font-semibold'>Community Guidelines</span>
     </div>
     <div className='flex flex-col gap-1'>
        <h3 className='text-2xl font-bold'>Legal</h3>
        <span className='text-lg font-semibold'>Cookies Policy</span>
        <span className='text-lg font-semibold'>Privacy Policy</span>
        <span className='text-lg font-semibold'>Terms of Service</span>
        <span className='text-lg font-semibold'>Law Enforcement</span>
     </div>
     <div>
        <h3 className='text-2xl font-bold'>Install App</h3>
     </div>
     </div>
    </footer>
  )
}

export default Footer