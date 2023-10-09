import React from 'react'
import ProfileImg from '../assets/images (1).jpg'
import Header from '../components/Header';

function ProfilePage() {
  const FormData = {
    name:'Priya',
    surname:'Sharma',
    adharNo:'6524 5862 4852',
    mobileNo:'9823516472',
    pin:'5312'
  }

  return (<>
    <Header/>
    <main className=' container mx-auto xl:px-24 lg:px-10 px-5 py-5 flex lg:flex-row flex-col lg:items-start items-center justify-between gap-7'>
      <div className='border lg:w-1/2 px-7 pt-10 rounded-2xl border-sky-900'>
      <h2 className="text-2xl font-semibold mb-5">Personal Details</h2>
        <div className="flex lg:flex-row flex-col-reverse items-start justify-between gap-5">
          <div className="lg:w-3/5">
            <div className="flex items-center justify-between gap-2">
              <div className="flex flex-col items-start gap-1 mb-5 w-1/2">
                <label className="text-sky-900 text-sm font-semibold">Name</label>
                <input
                  type="text"
                  className="w-full outline-none border border-gray-400 px-2 py-1 rounded-sm"
                  placeholder="Name"
                  value={FormData.name}
                />
              </div>
              <div className="flex flex-col items-start gap-1 mb-5 w-1/2">
                <label className="text-sky-900 text-sm font-semibold">Surname</label>
                <input
                  type="text"
                  className="w-full outline-none border border-gray-400 px-2 py-1 rounded-sm"
                  placeholder="Surname"
                  value={FormData.surname}
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 mb-5 w-[80%]">
              <label className="text-sky-900 text-sm font-semibold">Aadhar Number</label>
              <input
                type="text"
                className="w-full outline-none border border-gray-400 px-2 py-1 rounded-sm"
                placeholder="Aadhar No."
                value={FormData.adharNo}
              />
            </div>
            <div className="flex flex-col items-start gap-1 mb-5 w-[80%]">
              <label className="text-sky-900 text-sm font-semibold">Mobile Number</label>
              <input
                type="number"
                className="w-full outline-none border border-gray-400 px-2 py-1 rounded-sm"
                placeholder="Enter Mobile No"
                value={FormData.mobileNo}
              />
            </div>
            <div className="flex flex-col items-start gap-1 mb-5 w-[80%]">
              <label className="text-sky-900 text-sm font-semibold">Your M pin for Login</label>
              <input
                type="email"
                className="w-full outline-none border border-gray-400 px-2 py-1 rounded-sm"
                placeholder="Email"
                value={FormData.pin}
              />
            </div>
          </div>
          <img src={ProfileImg} alt="img" className="h-32 rounded-2xl" />
        </div>
      </div>
      <div className=' lg:w-1/2 px-5 py-12'>
        <h2 className='text-2xl font-bold mb-2'>Application Status</h2>
        <div className='flex items-start justify-start gap-3'>
        <div className=' flex flex-col items-start justify-center'>
          <span className='px-2 h-4 bg-green-600 rounded-full'></span>
          <span className='h-10 ml-2 border border-l-black border-dashed'></span>
          <span className='px-3 h-6 bg-sky-900 rounded-full '></span>
          <span className='h-10 ml-2 border border-l-black border-dashed'></span>
          <span></span>
        </div>
        <div className=' flex flex-col items-start justify-center gap-7'>
            <span className='text-stone-500'>Application Submitted</span>
            <span className='text-sky-900 text-xl font-semibold'>In Progress</span>        
            <span className='text-stone-500'>Approved</span>
        </div>
        </div>
      </div>
    </main>
    </>)
}

export default ProfilePage;