import React from 'react'
import {useParams} from 'react-router-dom'
import { NavList } from '../sample-data/data'

function Header() {
  const {id} = useParams()
  console.log(id)

  return (
    <header className='bg-sky-900'>
      <nav className={`container mx-auto flex items-center xl:px-24 lg:px-10 px-5 ${id === 'profile'? 'justify-between py-12 lg:gap-5':''}`}>
        <div className='xl:px-5'>
            <h1 className='text-4xl font-semibold text-red-600'>LOGO</h1>
        </div>
        <div className={`mx-auto text-center px-5 text-white py-7 ${id === 'profile'? 'hidden':''}`}>
            <h2 className='text-3xl font-bold'>WELCOME TO ANANT NIDHI PRIVATE LIMITED</h2>
            <p>235, 2nd Floor Opoosite Sector-13 Entrance, Modal Town Hisar Hariyana - 125001</p>
            <p>
                <span className='mr-8'>Contact: 9015702702</span>
                <span>Email: infopb77@gmail.com</span>
            </p>
            <p>CIN NO: U65999HR2018PLC077024</p>
        </div>
        <div className={`${id === 'profile'? '':'hidden'} flex items-center justify-between xl:gap-14 lg:gap-10 text-white`}>
          {
            NavList.map((item,index)=>{
              return <div key={index} className='flex items-center justify-center gap-2'>
                {item.icon}
                <span className='text-lg font-semibold'>{item.name}</span>
              </div>
            })
          }
        </div>
        <div className={`${id === 'profile'? '':'hidden'} flex items-center justify-between gap-2`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 p-1 text-sky-900 bg-white rounded-full">
            <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 p-1 text-sky-900 bg-white rounded-full">
            <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clipRule="evenodd" />
          </svg>
        </div>
      </nav>
    </header>
  )
}

export default Header