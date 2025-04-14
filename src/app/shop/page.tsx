import React from 'react'
import Footer from '../components/Footer';
import WhatsAppFloatingButton from '../components/WhatsAppFloatingButton';

function shop() {
  return (
    <div className='min-h-screen bg-gray-100 flex flex-col items-center justify-center pt-18 p-6 mt-10 text-center'>
      <div className='max-w-3xl p-6'>
        <h1 className='text-3xl font-semibold text-gray-800 font-gellatio'>Our Product Categories</h1>
        <p className='text-gray-600 mt-2'>We are currently working on our product catalog. Please visit back soon!</p>
        <div className='mt-6 space-y-4'>
          <div>
            <h2 className='text-xl font-semibold text-gray-700'>Men</h2>
            <div className='text-gray-600 mt-1'>
              <p>Scarves</p>
              <p>Stole</p>
              <p>Shawls</p>
              <p>Tweed</p>
            </div>
            
          </div>
          <div>
            <h2 className='text-xl font-semibold text-gray-700'>Women</h2>
            <div className='text-gray-600 mt-1'>
              <p>Scarves</p>
              <p>Stole</p>
              <p>Shawls</p>
              <p>Tweed</p>
            </div>
            
          </div>
          <div>
            <h2 className='text-xl font-semibold text-gray-700'>Home Furnishing</h2>
            <div className='text-gray-600 mt-1'>
              <p>Throws</p>
              <p>Table Runner</p>
              <p>Curtains</p>
            </div>
            
          </div>
          <div>
            <h2 className='text-xl font-semibold text-gray-700'>Fabric Store</h2>
            <div className='text-gray-600 mt-1'>
              <p>Running Fabric (Made to Order)</p>
            </div>
            
          </div>
        </div>
      </div>
      <WhatsAppFloatingButton />
      <Footer />
    </div>
  )
}

export default shop
